const express = require('express');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors());

let users = [
  { id: '1', username: 'user1', password: 'password123', role: 'General User' },
  { id: '2', username: 'admin1', password: 'password123', role: 'Admin' }
];

const simulateDelay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

app.post('/api/login', async (req, res) => {
  const { username, password, role } = req.body;
  await simulateDelay(1000); 

  const foundUser = users.find(u => u.username === username && u.role === role);

  if (foundUser && password === foundUser.password) {
    res.status(200).json({ success: true, user: foundUser });
  } else {
    res.status(401).json({ success: false, message: 'Invalid credentials or wrong role selection!' });
  }
});

app.get('/api/records', async (req, res) => {
  const userRole = req.query.role || 'General User';
  const delayParam = parseInt(req.query.delay) || 2000; 
  
  await simulateDelay(delayParam);

  const userRecords = [
    { id: 'MP-901', candidateName: 'John Doe', type: 'Criminal History Check', status: 'Pending Review' },
    { id: 'MP-902', candidateName: 'Jane Smith', type: 'Employment History Verification', status: 'Passed Verified' },
    { id: 'MP-903', candidateName: 'Bob Johnson', type: 'Academic Credentials Check', status: 'In Progress' }
  ];

  const adminRecords = [
    { id: 'USR-01', username: 'user1', role: 'General User' },
    { id: 'USR-02', username: 'admin1', role: 'Admin' },
    { id: 'USR-03', username: 'auditor_test', role: 'General User' }
  ];

  const recordDataset = (userRole === 'Admin') ? adminRecords : userRecords;

  res.status(200).json(recordDataset);
});

app.get('/api/admin/users', (req, res) => {
  res.status(200).json(users);
});

app.listen(3000, () => console.log('Kitchen server is running on port 3000!'));