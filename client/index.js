import Web3 from 'web3';
import configuration from '../build/contracts/Warrant.json';

const newWarrant ={
    warrant: [
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
    data = newWarrant.warrant[0];
    console.log(data);
    console.log(data.policeStation);
    console.log(data.policeStation, data.onDutyOfficer, data.date, data.victimName, data.victimPhone, data.accusedName, data.subject, data.summary, data.fileHash, "");
    obj = data;
    newstr = obj.policeStation + obj.onDutyOfficer + obj.date + obj.victimName 
    + obj.victimPhone + obj.accusedName + obj.subject + obj.summary + obj.fileHash;
    console.log('Size:',newstr.length * 2);
    inputValue(data.policeStation, data.onDutyOfficer, data.date, data.victimName, data.victimPhone, data.accusedName, data.subject, data.summary, data.fileHash, "");

}
main();


