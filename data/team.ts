export interface TeamMember {
  name: string;
  position: string;
  faculty: string;
  year: string;
}

export interface TeamDepartment {
  department: string;
  members: TeamMember[];
}

export const teamDepartments: TeamDepartment[] = [
  {
    department: "Co-Presidents",
    members: [
      { name: "Name Surname", position: "Co-President", faculty: "Commerce and Accountancy", year: "Year 3" },
      { name: "Name Surname", position: "Co-President", faculty: "Commerce and Accountancy", year: "Year 3" },
    ],
  },
  {
    department: "Operations",
    members: [
      { name: "Name Surname", position: "Head of Operations", faculty: "Commerce and Accountancy", year: "Year 3" },
      { name: "Name Surname", position: "Operations Officer", faculty: "Economics", year: "Year 2" },
      { name: "Name Surname", position: "Operations Officer", faculty: "Commerce and Accountancy", year: "Year 2" },
    ],
  },
  {
    department: "Public Relations",
    members: [
      { name: "Name Surname", position: "Head of Public Relations", faculty: "Communication Arts", year: "Year 3" },
      { name: "Name Surname", position: "PR Officer", faculty: "Commerce and Accountancy", year: "Year 2" },
    ],
  },
  {
    department: "People & Culture",
    members: [
      { name: "Name Surname", position: "Head of People & Culture", faculty: "Psychology", year: "Year 3" },
      { name: "Name Surname", position: "People & Culture Officer", faculty: "Commerce and Accountancy", year: "Year 2" },
    ],
  },
  {
    department: "Information Technology",
    members: [
      { name: "Name Surname", position: "Head of Information Technology", faculty: "Engineering", year: "Year 3" },
    ],
  },
];
