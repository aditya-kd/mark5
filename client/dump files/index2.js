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
            summary: "Lorem simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'sLorem  's standard a type industry'sLorem  's standard a type   standard a type industry'sLorem  's standard a typ st 'sLdsgf",
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

const getFormDetails = () => {
        const psName = document.getElementById('Station').value;
        const officer = document.getElementById("Officer").value;
        const date = document.getElementById("Date").value;
        const victimName = document.getElementById("VictimName").value;
        const victimPhone = document.getElementById("VictimPhone").value;
        const subject = document.getElementById("Subject").value;
        const accusedName = document.getElementById("AccusedName").value;
        const details = document.getElementById("Details").value;
        //Console output
        console.log("Station Name:", psName);
        console.log("On-Duty officer:",officer);
        console.log("Date:",date);
        console.log("Victim:",victimName);
        console.log("Victim Contact:", victimPhone);
        console.log("Subject:",subject);
        console.log("Accused:",accusedName);
        console.log("Detailed Account:",details);
        //create a JSON object from this data.
        var dataObject = {
            warrant: {
                policeStation: psName,
                onDutyOfficer: officer,
                date: date,
                victimName: victimName,
                victimPhone: victimPhone,
                accusedName: accusedName,
                subject: subject,
                summary: details,
                fileHash: ""
              },
        }
      }

const getFileHash = () =>{
    return "Qmc5KovUi3gEdxPckbLp92i7qKN5TGQe6fJJb32M6JogBC";
}

const process2 = async(obj)=>{
    
    var formDetails = getFormDetails();
    formDetails.fileHash = getFileHash();

    //till here the data is complete and ready to be sent to smart contract.
    obj = formDetails;
    obj.policeStation + obj.onDutyOfficer + obj.date + obj.victimName 
    + obj.victimPhone + obj.accusedName + obj.subject + obj.summary + obj.fileHash;
    console.log("Object", obj);
    console.log('Size:',newstr.length * 2);
    // inputValue(data.policeStation, data.onDutyOfficer, data.date, data.victimName, data.victimPhone, data.accusedName, data.subject, data.summary, data.fileHash, "");

}
function process(){
    console.log("hello world");
}

const main = async()=> {
    const accounts = await web3.eth.requestAccounts();
    account = accounts[0];
    console.log("Current Account", account);
    // methodList = await contract.methods;


    // console.log("Methods in the Contract", methodList);
    // data = newWarrant.warrant[0];

    // When "Save" is clicked the functions are called
    // first function to be called is process().

}
main();


