import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
 
} from "recharts";

const Statistics = () => {
  const studentsData = 
  [
    {
      "student_id": 1,
      "name": "Student 1",
      "class": "12th",
      "mathematics": 92,
      "physics": 88,
      "chemistry": 90
    },
    { 
      "student_id": 2,
      "name": "Student 2",
      "class": "12th",
      "mathematics": 85,
      "physics": 78,
      "chemistry": 92
    },
    {
      "student_id": 3,
      "name": "Student 3",
      "class": "12th",
      "mathematics": 78,
      "physics": 86,
      "chemistry": 89
    },
    {
      "student_id": 4,
      "name": "Student 4",
      "class": "12th",
      "mathematics": 90,
      "physics": 92,
      "chemistry": 94
    },
    {
      "student_id": 5,
      "name": "Student 5",
      "class": "12th",
      "mathematics": 88,
      "physics": 85,
      "chemistry": 80
    },
    {
      "student_id": 6,
      "name": "Student 6",
      "class": "12th",
      "mathematics": 86,
      "physics": 89,
      "chemistry": 92
    },
    {
      "student_id": 7,
      "name": "Student 7",
      "class": "12th",
      "mathematics": 75,
      "physics": 80,
      "chemistry": 85
    },
    {
      "student_id": 8,
      "name": "Student 8",
      "class": "12th",
      "mathematics": 92,
      "physics": 90,
      "chemistry": 88
    },
    {
      "student_id": 9,
      "name": "Student 9",
      "class": "12th",
      "mathematics": 89,
      "physics": 87,
      "chemistry": 83
    },
    {
      "student_id": 10,
      "name": "Student 10",
      "class": "12th",
      "mathematics": 80,
      "physics": 75,
      "chemistry": 78
    }
  ]
  
  return (
    <AreaChart
      width={900}
      height={400}
      data={studentsData}
      margin={{
        top: 30,
        right: 30,
        left: 0,
        bottom: 0,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
  
      <YAxis />
    
      <Tooltip />
      <Area type="monotone" dataKey="physics" stroke="#8884d8" fill="#8884d8" />
      <Area type="monotone" dataKey="chemistry" stroke="#82ca9d" fill="#8884d8" />
      <Area type="monotone" dataKey="mathematics" stroke="#FFCC70" fill="#8884d8" />
    </AreaChart>
  );
};

export default Statistics;
