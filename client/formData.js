function display(){
    console.log("Hello World");
}
const psName = document.getElementById('Station').value;
const form = document.getElementById("myform");
const officer = document.getElementById("Officer");
const date = document.getElementById("Date");
const victimName = document.getElementById("VictimName");
const victimPhone = document.getElementById("VictimPhone");
const subject = document.getElementById("Subject");
const accusedName = document.getElementById("AccusedName");
const details = document.getElementById("Details");
const btn = document.getElementById("Save");
btn.onclick = display();

victimName.value="aditya";
console.log(psName);
const newWarrant = {
    warrant :[
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