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
        {
            policeStation: "Central Police Station",
            onDutyOfficer: "Ajay Singh",
            date: "12-31-2020",
            victimName: "Harish",
            accusedName: "Sanjay",
            summary: "Lorem simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'sLorem  's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and ",
            fileHash: "Qmc5KovUi3gEdxPckbLp92i7qKN5TGQe6fJJb32M6JogBC"
          },
          {
            policeStation: "Central Police Station",
            onDutyOfficer: "Ajay Singh",
            date: "12-31-2020",
            victimName: "Harish",
            accusedName: "Sanjay",
            summary: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's  unknownunknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            fileHash: "Qmc5KovUi3gEdxPckbLp92i7qKN5TGQe6fJJb32M6JogBC"
          },
          
      {
        policeStation: "Central Police Station",
        onDutyOfficer: "Ajay Singh",
        date: "12-31-2020",
        victimName: "Harish",
        accusedName: "Sanjay",
        summary: "Lorem Ipsum is a text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy textab ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        fileHash: "Qmc5KovUi3gEdxPckbLp92i7qKN5TGQe6fJJb32M6JogBC"
      },
      {
        policeStation: "Central Police Station",
        onDutyOfficer: "Ajay Singh",
        date: "12-31-2020",
        victimName: "Harish",
        accusedName: "Sanjay Singh",
        summary: "setting industry. Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        fileHash: "Qmc5KovUi3gEdxPckbLp92i7qKN5TGQe6fJJb32M6JogBC"
      },
      {
        policeStation: "Central Police Station",
        onDutyOfficer: "Ajay Singh",
        date: "12-31-2020",
        victimName: "Harish",
        accusedName: "Sanjay",
        summary: "when unknown printer took a galley of type and scrambled it to make a type specimen book.",
        fileHash: "Qmc5KovUi3gEdxPckbLp92i7qKN5TGQe6fJJb32M6JogBC"
      },
      {
        policeStation: "Central Police Station",
        onDutyOfficer: "Ajay Singh",
        date: "12-31-2020",
        victimName: "Harish",
        accusedName: "Sanjay",
        summary: "specimenbook",
        fileHash: "Qmc5KovUi3gEdxPckbLp92i7qKN5TGQe6fJJb32M6JogBC"
      },{
        policeStation: "Central Police Station",
        onDutyOfficer: "",
        date: "",
        victimName: "Harish",
        accusedName: "Sanjay",
        summary: ",book.",
        fileHash: "Qmc5KovUi3gEdxPckbLp92i7qKN5TGQe6fJJb32M6JogBC"
      },
      
      {
        policeStation: "Police Stan",
        onDutyOfficer: "",
        date: "",
        victimName: "",
        accusedName: "",
        summary: ",  .",
        fileHash: "Qmc5KovUi3gEdxPckbLp92i7qKN5TGQe6fJJb32M6JogBC"
      },
      {
        policeStation: "",
        onDutyOfficer: "",
        date: "",
        victimName: "",
        accusedName: "",
        summary: "",
        fileHash: "Qmc5KovUi3gEdxPckbLp92i7qKN5TGQe6fJJb32M6JogBC"
      },
      
    ]
    
  }