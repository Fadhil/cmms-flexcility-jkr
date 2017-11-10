import { InMemoryDbService } from 'angular-in-memory-web-api';

export class AllDataService implements InMemoryDbService{
    createDb()
        {
            let workrequests = [
                { id:1, details: "kipas rosak", date: "21/08/2017", status:"New", requestor:"Jamalal"},
                { id:2, details: "lampu rosak", date: "13/12/2017", status:"Open", requestor:"Saripah"},
                { id:3, details: "aircond rosak", date: "10/11/2017", status:"closed", requestor:"Jantan"},
                { id:4, details: "paip bocor", date: "7/08/2017", status:"New", requestor:"PedroLee"},
                { id:5, details: "lantai retak", date: "5/02/2016", status:"Closed", requestor:"Bakayoko"}
            ];
            let users = [
                {
                    _id: 101,
                    email: "admin@flexcility.com",
                    password: "admin@flex",
                    department: "Human Resource",
                    no_phone:"0133422091",
                    username:"Admin bin Tahier",
                    role: "Admin",
                    date: "28/05/2017"
                    },
                    {
                    _id: 102,
                    email: "zila@flexcility.com",
                    password: "zila@flex",
                    department: "Human Resource",
                    no_phone:"014435678",
                    username:"Fadzilla",
                    role: "Admin",
                    date: "13/05/2017"
                    },
                    {
                    _id: 103,
                    email: "haziq@flexcility.com",
                    password: "haziq@flex",
                    department: "Information Technology",
                    no_phone:"0133462327",
                    username:"Haziq Azmi",
                    role: "Engineer",
                    date: "21/05/2016"
                    },
                    {
                    _id: 104,
                    email: "fadhil@flexcility.com",
                    password: "fadhil@flex",
                    department: "Manager",
                    no_phone:"0144673923",
                    username:"Fadhil Luqman",
                    role: "Technician",
                    date: "31/01/2017"
                    },
                    {
                    _id: 105,
                    email: "zaman@gmail.com",
                    password: "zaman@flex",
                    department: "client",
                    no_phone:"0119191",
                    username:"Zaman Tajul",
                    role: "Admin",
                    date: "14/01/2017"
                    }

            ];
            return {workrequests, users};
        }

}