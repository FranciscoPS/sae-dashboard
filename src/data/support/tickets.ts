type Registro = {
  id: string;
  created: string; // o Date
  name: string;
  enrollment: string; // "matrícula"
  career: string;
  trimester: string;
  status: "inscrito" | "pendiente" | "baja";
};

export const tickets: Registro[] = [
  {
    "id": "1",
    "created": "2024-02-02T03:22:33",
    "name": "Humberto Francisca Barrientos Santill\u00e1n",
    "enrollment": "A035198677",
    "career": "Producci\u00f3n Musical",
    "trimester": "NI 2024 T2",
    "status": "pendiente"
  },
  {
    "id": "2",
    "created": "2024-10-29T18:53:18",
    "name": "Mart\u00edn Julio C\u00e9sar Ben\u00edtez",
    "enrollment": "A034531220",
    "career": "Ingenier\u00eda en Computaci\u00f3n",
    "trimester": "NI 2024 T1",
    "status": "inscrito"
  },
  {
    "id": "3",
    "created": "2024-11-20T17:17:21",
    "name": "Mtro. Pedro Soto",
    "enrollment": "A092927755",
    "career": "Dise\u00f1o Interactivo",
    "trimester": "NI 2023 T2",
    "status": "inscrito"
  },
  {
    "id": "4",
    "created": "2024-03-06T05:53:49",
    "name": "Horacio Leticia Ram\u00f3n",
    "enrollment": "A019032716",
    "career": "Programaci\u00f3n de Videojuegos",
    "trimester": "NI 2024 T4",
    "status": "baja"
  },
  {
    "id": "5",
    "created": "2024-02-24T20:10:08",
    "name": "Abel Corona Melgar",
    "enrollment": "A078837443",
    "career": "Programaci\u00f3n de Videojuegos",
    "trimester": "NI 2024 T4",
    "status": "inscrito"
  },
  {
    "id": "6",
    "created": "2024-04-17T13:36:24",
    "name": "Fabiola Alma Griego",
    "enrollment": "A067397349",
    "career": "Producci\u00f3n Musical",
    "trimester": "NI 2023 T2",
    "status": "baja"
  },
  {
    "id": "7",
    "created": "2023-07-11T18:48:48",
    "name": "Emiliano Anel Gir\u00f3n",
    "enrollment": "A099415145",
    "career": "Negocios de la M\u00fasica",
    "trimester": "NI 2024 T4",
    "status": "baja"
  },
  {
    "id": "8",
    "created": "2024-03-08T04:51:10",
    "name": "Estela Juan Meza Ballesteros",
    "enrollment": "A014689410",
    "career": "Dise\u00f1o Interactivo",
    "trimester": "NI 2023 T3",
    "status": "inscrito"
  },
  {
    "id": "9",
    "created": "2025-03-07T01:14:58",
    "name": "Jacinto Elisa Maldonado",
    "enrollment": "A027773758",
    "career": "Producci\u00f3n Musical",
    "trimester": "NI 2024 T4",
    "status": "inscrito"
  },
  {
    "id": "10",
    "created": "2024-01-11T10:16:08",
    "name": "Dr. Leonor Ruelas",
    "enrollment": "A042263575",
    "career": "Ingenier\u00eda en Audio",
    "trimester": "NI 2023 T2",
    "status": "inscrito"
  },
  {
    "id": "11",
    "created": "2023-09-19T04:18:33",
    "name": "\u00c1ngela Lebr\u00f3n",
    "enrollment": "A074923927",
    "career": "Dise\u00f1o Interactivo",
    "trimester": "NI 2023 T1",
    "status": "pendiente"
  },
  {
    "id": "12",
    "created": "2023-09-02T15:37:53",
    "name": "Frida Vanesa Raya",
    "enrollment": "A025776967",
    "career": "Ciencias de la Comunicaci\u00f3n",
    "trimester": "NI 2023 T3",
    "status": "baja"
  },
  {
    "id": "13",
    "created": "2023-11-04T07:42:46",
    "name": "Gerardo Ord\u00f3\u00f1ez Rivero",
    "enrollment": "A059195377",
    "career": "Dise\u00f1o de Videojuegos",
    "trimester": "NI 2024 T4",
    "status": "baja"
  },
  {
    "id": "14",
    "created": "2023-05-05T16:23:10",
    "name": "Eric Barrag\u00e1n",
    "enrollment": "A091636279",
    "career": "Programaci\u00f3n de Videojuegos",
    "trimester": "NI 2023 T1",
    "status": "pendiente"
  },
  {
    "id": "15",
    "created": "2023-10-11T01:49:43",
    "name": "Federico Jon\u00e1s Espinoza",
    "enrollment": "A069247311",
    "career": "Programaci\u00f3n de Videojuegos",
    "trimester": "NI 2024 T4",
    "status": "pendiente"
  },
  {
    "id": "16",
    "created": "2024-07-07T16:29:55",
    "name": "Silvia Mar\u00eda Cristina Corona",
    "enrollment": "A022804277",
    "career": "Ciencias de la Comunicaci\u00f3n",
    "trimester": "NI 2023 T2",
    "status": "inscrito"
  },
  {
    "id": "17",
    "created": "2024-04-28T23:47:31",
    "name": "Sr(a). Asunci\u00f3n Mu\u00f1oz",
    "enrollment": "A060038920",
    "career": "Ingenier\u00eda en Audio",
    "trimester": "NI 2023 T3",
    "status": "baja"
  },
  {
    "id": "18",
    "created": "2024-02-29T02:37:01",
    "name": "Rolando Delgadillo",
    "enrollment": "A029170770",
    "career": "Dise\u00f1o de Videojuegos",
    "trimester": "NI 2023 T4",
    "status": "inscrito"
  },
  {
    "id": "19",
    "created": "2025-02-01T18:35:15",
    "name": "Javier Daniel Rojas Viera",
    "enrollment": "A010051972",
    "career": "Dise\u00f1o Interactivo",
    "trimester": "NI 2024 T2",
    "status": "pendiente"
  },
  {
    "id": "20",
    "created": "2025-03-18T03:57:18",
    "name": "Frida Saucedo Oliv\u00e1rez",
    "enrollment": "A011133275",
    "career": "Producci\u00f3n Musical",
    "trimester": "NI 2024 T1",
    "status": "inscrito"
  },
  {
    "id": "21",
    "created": "2023-12-12T02:42:01",
    "name": "Jes\u00fas Z\u00fa\u00f1iga",
    "enrollment": "A075565064",
    "career": "Ciencias de la Comunicaci\u00f3n",
    "trimester": "NI 2023 T4",
    "status": "pendiente"
  },
  {
    "id": "22",
    "created": "2024-05-24T14:31:39",
    "name": "Tania Cornejo Garica",
    "enrollment": "A028619555",
    "career": "Ingenier\u00eda en Audio",
    "trimester": "NI 2025 T1",
    "status": "pendiente"
  },
  {
    "id": "23",
    "created": "2024-08-22T14:33:13",
    "name": "Gloria Ramos",
    "enrollment": "A043369614",
    "career": "Negocios de la M\u00fasica",
    "trimester": "NI 2025 T1",
    "status": "inscrito"
  },
  {
    "id": "24",
    "created": "2024-08-19T01:57:45",
    "name": "Camilo Gaona Zarate",
    "enrollment": "A018279435",
    "career": "Dise\u00f1o de Videojuegos",
    "trimester": "NI 2024 T2",
    "status": "pendiente"
  },
  {
    "id": "25",
    "created": "2023-12-26T04:01:14",
    "name": "Martha Lucio",
    "enrollment": "A047085756",
    "career": "Producci\u00f3n Musical",
    "trimester": "NI 2023 T1",
    "status": "pendiente"
  },
  {
    "id": "26",
    "created": "2025-03-13T06:25:31",
    "name": "D\u00e9bora Nicol\u00e1s Corona",
    "enrollment": "A063782851",
    "career": "Negocios de la M\u00fasica",
    "trimester": "NI 2023 T2",
    "status": "baja"
  },
  {
    "id": "27",
    "created": "2023-12-10T09:30:44",
    "name": "Celia Luis Miguel Rodarte Zamora",
    "enrollment": "A063031006",
    "career": "Cine Digital",
    "trimester": "NI 2023 T2",
    "status": "inscrito"
  },
  {
    "id": "28",
    "created": "2024-04-07T20:41:36",
    "name": "Guillermo Cornejo Rael",
    "enrollment": "A029754093",
    "career": "Cine Digital",
    "trimester": "NI 2024 T3",
    "status": "baja"
  },
  {
    "id": "29",
    "created": "2025-02-09T09:59:58",
    "name": "Jos Jos\u00e9 Emilio de Le\u00f3n Mata",
    "enrollment": "A010096608",
    "career": "Producci\u00f3n Musical",
    "trimester": "NI 2024 T4",
    "status": "baja"
  },
  {
    "id": "30",
    "created": "2024-01-25T10:09:39",
    "name": "Sessa Mar\u00eda Elena Santacruz",
    "enrollment": "A036872329",
    "career": "Negocios de la M\u00fasica",
    "trimester": "NI 2024 T1",
    "status": "inscrito"
  },
  {
    "id": "31",
    "created": "2024-05-18T21:48:14",
    "name": "Mar\u00eda Jos\u00e9 Jos\u00e9 Carlos Casillas",
    "enrollment": "A044144804",
    "career": "Programaci\u00f3n de Videojuegos",
    "trimester": "NI 2025 T1",
    "status": "baja"
  },
  {
    "id": "32",
    "created": "2023-08-10T07:40:13",
    "name": "Estefan\u00eda Alfredo Alem\u00e1n",
    "enrollment": "A029504764",
    "career": "Ingenier\u00eda en Audio",
    "trimester": "NI 2025 T1",
    "status": "inscrito"
  },
  {
    "id": "33",
    "created": "2023-11-21T01:06:08",
    "name": "Mtro. Catalina Navarro",
    "enrollment": "A043743688",
    "career": "Dise\u00f1o de Videojuegos",
    "trimester": "NI 2023 T4",
    "status": "baja"
  },
  {
    "id": "34",
    "created": "2023-04-13T03:41:41",
    "name": "Silvano Cab\u00e1n Sauceda",
    "enrollment": "A085274365",
    "career": "Dise\u00f1o Interactivo",
    "trimester": "NI 2023 T1",
    "status": "inscrito"
  },
  {
    "id": "35",
    "created": "2024-04-01T08:29:17",
    "name": "Juan Jos\u00e9 Valadez",
    "enrollment": "A018993923",
    "career": "Producci\u00f3n Musical",
    "trimester": "NI 2025 T1",
    "status": "inscrito"
  },
  {
    "id": "36",
    "created": "2024-04-09T09:42:28",
    "name": "Cristina Magdalena de la O Casta\u00f1eda",
    "enrollment": "A063466868",
    "career": "Producci\u00f3n Musical",
    "trimester": "NI 2024 T4",
    "status": "inscrito"
  },
  {
    "id": "37",
    "created": "2025-01-03T03:55:31",
    "name": "Delia Vanesa Saucedo Mata",
    "enrollment": "A039514302",
    "career": "Ingenier\u00eda en Audio",
    "trimester": "NI 2023 T1",
    "status": "baja"
  },
  {
    "id": "38",
    "created": "2024-02-03T05:05:48",
    "name": "Julio D\u00edaz Aponte",
    "enrollment": "A022624856",
    "career": "Cine Digital",
    "trimester": "NI 2024 T4",
    "status": "pendiente"
  },
  {
    "id": "39",
    "created": "2023-06-06T00:07:12",
    "name": "Homero Carla Badillo",
    "enrollment": "A096641284",
    "career": "Dise\u00f1o de Videojuegos",
    "trimester": "NI 2024 T3",
    "status": "pendiente"
  },
  {
    "id": "40",
    "created": "2025-01-10T01:57:59",
    "name": "Martha Carrero Ochoa",
    "enrollment": "A060692235",
    "career": "Ingenier\u00eda en Computaci\u00f3n",
    "trimester": "NI 2023 T4",
    "status": "inscrito"
  },
  {
    "id": "41",
    "created": "2023-09-21T03:10:52",
    "name": "Yeni Cristina Quintero",
    "enrollment": "A049768722",
    "career": "Dise\u00f1o de Videojuegos",
    "trimester": "NI 2023 T1",
    "status": "pendiente"
  },
  {
    "id": "42",
    "created": "2024-05-12T16:01:00",
    "name": "Abril T\u00f3rrez Portillo",
    "enrollment": "A048928015",
    "career": "Negocios de la M\u00fasica",
    "trimester": "NI 2025 T1",
    "status": "inscrito"
  },
  {
    "id": "43",
    "created": "2023-07-12T00:03:40",
    "name": "Conchita Luis Su\u00e1rez Ni\u00f1o",
    "enrollment": "A086863576",
    "career": "Programaci\u00f3n de Videojuegos",
    "trimester": "NI 2023 T3",
    "status": "baja"
  },
  {
    "id": "44",
    "created": "2023-08-29T01:23:19",
    "name": "Esteban Eduardo Monta\u00f1ez Baca",
    "enrollment": "A081480554",
    "career": "Animaci\u00f3n y Efectos Visuales",
    "trimester": "NI 2025 T1",
    "status": "inscrito"
  },
  {
    "id": "45",
    "created": "2023-05-29T20:56:06",
    "name": "Clemente Gabriel Zepeda Alcaraz",
    "enrollment": "A069072282",
    "career": "Programaci\u00f3n de Videojuegos",
    "trimester": "NI 2024 T4",
    "status": "inscrito"
  },
  {
    "id": "46",
    "created": "2023-05-12T19:59:48",
    "name": "Yuridia Marco Antonio Pulido",
    "enrollment": "A069469766",
    "career": "Negocios de la M\u00fasica",
    "trimester": "NI 2023 T3",
    "status": "pendiente"
  },
  {
    "id": "47",
    "created": "2023-08-17T18:18:51",
    "name": "Ver\u00f3nica Pi\u00f1a",
    "enrollment": "A025325644",
    "career": "Ingenier\u00eda en Audio",
    "trimester": "NI 2023 T3",
    "status": "baja"
  },
  {
    "id": "48",
    "created": "2024-05-10T01:47:13",
    "name": "Humberto Paulina B\u00e1ez Salcido",
    "enrollment": "A031962075",
    "career": "Ciencias de la Comunicaci\u00f3n",
    "trimester": "NI 2025 T1",
    "status": "pendiente"
  },
  {
    "id": "49",
    "created": "2024-09-29T04:46:43",
    "name": "Gonzalo Aida de la Cr\u00faz",
    "enrollment": "A046124674",
    "career": "Dise\u00f1o Interactivo",
    "trimester": "NI 2024 T3",
    "status": "inscrito"
  },
  {
    "id": "50",
    "created": "2023-11-11T09:26:45",
    "name": "Mtro. Paola Garc\u00eda",
    "enrollment": "A023915839",
    "career": "Ciencias de la Comunicaci\u00f3n",
    "trimester": "NI 2024 T1",
    "status": "baja"
  }
];