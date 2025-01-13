export interface CommitteeMember {
  name: string;
  role: string;
  affiliation: string;
  image: string;
}

export interface Committee {
  id: string;
  name: string;
  members: CommitteeMember[];
}

export const committees: Committee[] = [
  {
    id: "patrons",
    name: "Patrons",
    members: [
      {
        name: "Dr. John Smith",
        role: "Chief Patron",
        affiliation: "University of Technology",
        image: "/placeholder.svg?height=200&width=200",
      },
      {
        name: "Dr. Sarah Johnson",
        role: "Patron",
        affiliation: "Institute of Science",
        image: "/placeholder.svg?height=200&width=200",
      },
    ],
  },
  {
    id: "advisory",
    name: "Advisory Committee",
    members: [
      {
        name: "Prof. Michael Brown",
        role: "Chair",
        affiliation: "Global Institute of Engineering",
        image: "/placeholder.svg?height=200&width=200",
      },
      {
        name: "Dr. Emily Davis",
        role: "Co-Chair",
        affiliation: "Technical University",
        image: "/placeholder.svg?height=200&width=200",
      },
    ],
  },
  {
    id: "general",
    name: "General Chairs",
    members: [
      {
        name: "Prof. Robert Wilson",
        role: "General Chair",
        affiliation: "Engineering Institute",
        image: "/placeholder.svg?height=200&width=200",
      },
      {
        name: "Dr. Lisa Anderson",
        role: "General Co-Chair",
        affiliation: "Science University",
        image: "/placeholder.svg?height=200&width=200",
      },
    ],
  },
  {
    id: "organizing",
    name: "Organizing Chairs",
    members: [
      {
        name: "Dr. James Miller",
        role: "Organizing Chair",
        affiliation: "Tech University",
        image: "/placeholder.svg?height=200&width=200",
      },
      {
        name: "Prof. Emma White",
        role: "Organizing Co-Chair",
        affiliation: "Institute of Engineering",
        image: "/placeholder.svg?height=200&width=200",
      },
    ],
  },
  {
    id: "technical",
    name: "Technical Program Chairs",
    members: [
      {
        name: "Prof. David Lee",
        role: "Technical Chair",
        affiliation: "University of Science",
        image: "/placeholder.svg?height=200&width=200",
      },
      {
        name: "Dr. Maria Garcia",
        role: "Technical Co-Chair",
        affiliation: "Engineering College",
        image: "/placeholder.svg?height=200&width=200",
      },
    ],
  },
];
