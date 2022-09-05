import Web3 from 'web3';
import configuration from '../build/contracts/Warrant.json';

const newWarrant ={
    warrant: [
        {
            policeStation: "Central Police Station",
            onDutyOfficer: "Ajay Singh",
            date: "12-31-2020",
            victimName: "Harish",
            victimPhone: "9412345600",
            accusedName: "Sanjay",
            subject: "Theft in office",
            summary: "Lorem simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'sLorem  's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the ",
            fileHash: "Qmc5KovUi3gEdxPckbLp92i7qKN5TGQe6fJJb32M6JogBC"
          },
    ]
}
const CONTRACT_ADDRESS = configuration.networks['5777'].address;
console.log("Contract Address", CONTRACT_ADDRESS);
const CONTRACT_ABI = configuration.abi;
console.log("Contract ABI: ", CONTRACT_ABI);

const web3 = new Web3(Web3.givenProvider || 'http://127.0.0.1:7545');

const contract = new web3.eth.Contract(CONTRACT_ABI, CONTRACT_ADDRESS);
console.log(contract);

let account;

const inputValue = async (stationName, officer, date, victim_name, victim_phone,
    accused_name, subject, details, hash) => {
        await contract.methods.setWarrantData(
            stationName, officer, date, victim_name, victim_phone,
            accused_name, subject, details, hash
            ).send({from: account});
    }

const main = async()=> {
    const accounts = await web3.eth.requestAccounts();
    account = accounts[0];
    console.log("Current Account", account);
    methodList = await contract.methods;

    console.log("Methods in the Contract", methodList);
    data = newWarrant.warrant[0];
    console.log(data);
    console.log(data.policeStation);
    console.log(data.policeStation, data.onDutyOfficer, data.date, data.victimName, data.victimPhone, data.accusedName, data.subject, data.summary, data.fileHash, "");
    // inputValue(data.policeStation, data.onDutyOfficer, data.date, data.victimName, data.victimPhone, data.accusedName, data.subject, data.summary, data.fileHash, "");

}
main();



