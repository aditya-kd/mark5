import Web3 from 'web3';
import configuration from '../build/contracts/Warrant.json';

const newWarrant = {
    warrant: [
      //2012 Bytes (2KB)
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
      //1002 (Bytes)
      {
        policeStation: "Central Police Station",
        onDutyOfficer: "Ajay Singh",
        date: "12-31-2020",
        victimName: "Harish",
        victimPhone: "9412345600",
        accusedName: "Sanjay",
        subject: "Theft in office",
        summary: "Lorem simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'sLorem  's standard a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type spec",
        fileHash: "Qmc5KovUi3gEdxPckbLp92i7qKN5TGQe6fJJb32M6JogBC"
      },
      //500
      {
        policeStation: "Central Police Station",
        onDutyOfficer: "Ajay Singh",
        date: "12-31-2020",
        victimName: "Harish",
        victimPhone: "9412345600",
        accusedName: "Sanjay",
        subject: "Theft in office",
        summary: "Lorem simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'sLorem  's standard a type ",
        fileHash: "Qmc5KovUi3gEdxPckbLp92i7qKN5TGQe6fJJb32M6JogBC"
      },
      //300
      {
        policeStation: "Central Police Station",
        onDutyOfficer: "Ajay Singh",
        date: "12-31-2020",
        victimName: "Harish",
        victimPhone: "",
        accusedName: "",
        subject: "Theft in office",
        summary: "Lorem simply dummy text of the printing and t",
        fileHash: "Qmc5KovUi3gEdxPckbLp92i7qKN5TGQe6fJJb32M6JogBC"
      },
      //152
      {
        policeStation: "Police Station",
        onDutyOfficer: "",
        date: "12-31-2020",
        victimName: "Harish",
        victimPhone: "",
        accusedName: "",
        subject: "",
        summary: "",
        fileHash: "Qmc5KovUi3gEdxPckbLp92i7qKN5TGQe6fJJb32M6JogBC"
      },
      //100
      {
        policeStation: "Delhi",
        onDutyOfficer: "",
        date: "",
        victimName: "",
        victimPhone: "",
        accusedName: "",
        subject: "",
        summary: "",
        fileHash: "Qmc5KovUi3gEdxPckbLp92i7qKN5TGQe6fJJb32M6JogBC"
      },
      {
        policeStation: "",
        onDutyOfficer: "",
        date: "",
        victimName: "",
        victimPhone: "",
        accusedName: "",
        subject: "",
        summary: "",
        fileHash: "Qmc5KovUi3gEdxPckbLp92i7q"
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
    for(var i = 0; i<newWarrant.warrant.length; i++)
    {
    data = newWarrant.warrant[i];
    console.log(data);
    console.log(data.policeStation);
    console.log(data.policeStation, data.onDutyOfficer, data.date, data.victimName, data.victimPhone, data.accusedName, data.subject, data.summary, data.fileHash, "");
    obj = data;
    newstr = obj.policeStation + obj.onDutyOfficer + obj.date + obj.victimName 
    + obj.victimPhone + obj.accusedName + obj.subject + obj.summary + obj.fileHash;
    console.log('Size:',newstr.length * 2);
    // inputValue(data.policeStation, data.onDutyOfficer, data.date, data.victimName, data.victimPhone, data.accusedName, data.subject, data.summary, data.fileHash, "");
    }
}
main();


