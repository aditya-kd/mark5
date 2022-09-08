
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
}
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