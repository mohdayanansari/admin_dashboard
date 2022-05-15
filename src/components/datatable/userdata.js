export const userColumns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "user",
    headerName: "User",
    width: 230,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img src={params.row.img} alt="user" className="cellImg" />
          {params.row.username}
        </div>
      );
    },
  },
  {
    field: "email",
    headerName: "Email",
    width: 300,
  },
  {
    field: "phone",
    headerName: "Phone Number",
    width: 200,
  },
  {
    field: "status",
    headerName: "Status",
    width: 150,
    renderCell: (params) => {
      return (
        <div className={`cellWithStatus ${params.row.status}`}>
          {params.row.status}
        </div>
      );
    },
  },
];

export const userRows = [
  {
    id: 1,
    user: "Ayan Ansari",
    username: "Ayan",
    img: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80",
    date: "1 March",
    email: "test@gmail.com",
    phone: "6395210548",
    requestName: "something",
    status: "active",
  },
  {
    id: 2,
    user: "Ayan Ansari",
    username: "Ayan",
    img: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHVzZXJ8ZW58MHx8MHx8&w=1000&q=80",
    date: "1 March",
    email: "test@gmail.com",
    phone: "6395210548",
    requestName: "something",
    status: "active",
  },
  {
    id: 3,
    user: "Ayan Ansari",
    username: "Ayan",
    img: "https://images.unsplash.com/photo-1557862921-37829c790f19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
    date: "1 March",
    email: "test@gmail.com",
    phone: "6395210548",
    requestName: "something",
    status: "active",
  },
  {
    id: 4,
    user: "Ayan Ansari",
    username: "Ayan",
    img: "https://media.istockphoto.com/photos/portrait-of-young-healthy-asian-woman-with-smilingcloseup-face-with-picture-id1163467378?k=20&m=1163467378&s=612x612&w=0&h=DPqsTqmGP1lWiFQbkHzWiIzgtAFfNTYYLdGTjsxoBZ8=",
    date: "1 March",
    email: "test@gmail.com",
    phone: "6395210548",

    requestName: "something",
    status: "offline",
  },
  {
    id: 5,
    user: "Ayan Ansari",
    username: "Ayan",
    img: "https://thumbs.dreamstime.com/b/portrait-young-beautiful-girl-fashion-photo-29870052.jpg",
    date: "1 March",
    email: "test@gmail.com",
    phone: "6395210548",

    requestName: "something",
    status: "offline",
  },
  {
    id: 6,
    user: "Ayan Ansari",
    username: "Ayan",
    img: "https://st2.depositphotos.com/2422217/6619/i/450/depositphotos_66193223-stock-photo-beautiful-girl-with-an-elegant.jpg",
    date: "1 March",
    email: "test@gmail.com",
    phone: "6395210548",
    requestName: "something",
    status: "active",
  },
  {
    id: 7,
    user: "Ayan Ansari",
    username: "Ayan",
    img: "https://preview.keenthemes.com/metronic-v4/theme/assets/pages/media/profile/profile_user.jpg",
    date: "1 March",
    email: "test@gmail.com",
    phone: "6395210548",

    requestName: "something",
    status: "offline",
  },
  {
    id: 8,
    user: "Ayan Ansari",
    username: "Ayan",
    img: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80",
    date: "1 March",
    email: "test@gmail.com",
    phone: "6395210548",
    requestName: "something",
    status: "active",
  },
  {
    id: 2,
    user: "Ayan Ansari",
    username: "Ayan",
    img: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHVzZXJ8ZW58MHx8MHx8&w=1000&q=80",
    date: "1 March",
    email: "test@gmail.com",
    phone: "6395210548",

    requestName: "something",
    status: "active",
  },
  {
    id: 3,
    user: "Ayan Ansari",
    username: "Ayan",
    img: "https://images.unsplash.com/photo-1557862921-37829c790f19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
    date: "1 March",
    email: "test@gmail.com",
    phone: "6395210548",

    requestName: "something",
    status: "active",
  },
  {
    id: 4,
    user: "Ayan Ansari",
    username: "Ayan",
    img: "https://media.istockphoto.com/photos/portrait-of-young-healthy-asian-woman-with-smilingcloseup-face-with-picture-id1163467378?k=20&m=1163467378&s=612x612&w=0&h=DPqsTqmGP1lWiFQbkHzWiIzgtAFfNTYYLdGTjsxoBZ8=",
    date: "1 March",
    email: "test@gmail.com",
    phone: "6395210548",

    requestName: "something",
    status: "offline",
  },
  {
    id: 5,
    user: "Ayan Ansari",
    username: "Ayan",
    img: "https://thumbs.dreamstime.com/b/portrait-young-beautiful-girl-fashion-photo-29870052.jpg",
    date: "1 March",
    email: "test@gmail.com",
    phone: "6395210548",

    requestName: "something",
    status: "offline",
  },
  {
    id: 6,
    user: "Ayan Ansari",
    username: "Ayan",
    img: "https://st2.depositphotos.com/2422217/6619/i/450/depositphotos_66193223-stock-photo-beautiful-girl-with-an-elegant.jpg",
    date: "1 March",
    email: "test@gmail.com",
    phone: "6395210548",

    requestName: "something",
    status: "active",
  },
  {
    id: 7,
    user: "Ayan Ansari",
    username: "Ayan",
    img: "https://preview.keenthemes.com/metronic-v4/theme/assets/pages/media/profile/profile_user.jpg",
    date: "1 March",
    email: "test@gmail.com",
    phone: "6395210548",

    requestName: "something",
    status: "offline",
  },
];

// const columns = [
//   { field: "id", headerName: "ID", width: 70 },
//   { field: "firstName", headerName: "First name", width: 130 },
//   { field: "lastName", headerName: "Last name", width: 130 },
//   {
//     field: "age",
//     headerName: "Age",
//     type: "number",
//     width: 90,
//   },
//   {
//     field: "fullName",
//     headerName: "Full name",
//     description: "This column has a value getter and is not sortable.",
//     sortable: false,
//     width: 160,
//     valueGetter: (params) =>
//       `${params.row.firstName || ""} ${params.row.lastName || ""}`,
//   },
// ];

// const rows = [
//   { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
//   { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
//   { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
//   { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
//   { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
//   { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
//   { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
//   { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
//   { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
// ];
