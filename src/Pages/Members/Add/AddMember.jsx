import React, { useState } from "react";
import Modal from "@mui/material/Modal";
import Backdrop from "@mui/material/Backdrop";
import Fade from "@mui/material/Fade";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./AddMember.css";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
// import AdapterDateFns from '@mui/lab/AdapterDateFns';
// import LocalizationProvider from '@mui/lab/LocalizationProvider';
// import DatePicker from '@mui/lab/DatePicker';
import { useAPI } from '../../../Context'





const AddEmployeeModal = ({ open, onClose, onAdd }) => {
  const [newEmployee, setNewEmployee] = useState({
    id: "",
    name: "",
    email: "",
    contact_no: "",
    department: "",
    city: "",
    state: "",
    DOB: "",
    joining_date: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewEmployee((prevEmployee) => ({
      ...prevEmployee,
      [name]: value,
    }));
  };

  const handleAddClick = () => {
    onAdd(newEmployee);
    setNewEmployee({
      id: "",
      name: "",
      email: "",
      contact_no: "",
      department: "",
      city: "",
      state: "",
      DOB: "",
      joining_date: "",
    });
    onClose();
  };

  const [selectedState, setSelectedState] = useState('');
  const [selectedcity, setSelectedcity] = useState('');
  const [selectedDate, setSelectedDate] = useState(null);

  
  const statesData = {
    "AndraPradesh" :["Anantapur","Chittoor","East Godai","Guntur","Kadapa","Krishna","Kurnool","Prakasam","Nellore","Srikakulam","Visakhapatnam","Vizianagaram","West Godai"],
    "ArunachalPradesh" :["Anjaw","Changlang","Dibang Valley","East Kameng","East Siang","Kra Daadi","Kurung Kumey","Lohit","Longding","Lower Dibang Valley","Lower Subansiri","Namsai","Papum Pare","Siang","Tawang","Tirap","Upper Siang","Upper Subansiri","West Kameng","West Siang","Itanagar"],
    "Assam" :["Baksa","Barpeta","Biswanath","Bongaigaon","Cachar","Charaideo","Chirang","Darrang","Dhemaji","Dhubri","Dibrugarh","Goalpara","Golaghat","Hailakandi","Hojai","Jorhat","Kamrup Metropolitan","Kamrup (Rural)","Karbi Anglong","Karimganj","Kokrajhar","Lakhimpur","Majuli","Morigaon","Nagaon","Nalbari","Dima Hasao","Sivasagar","Sonitpur","South Salmara Mankachar","Tinsukia","Udalguri","West Karbi Anglong"],
    "Bihar" : ["Araria","Arwal","Aurangabad","Banka","Begusarai","Bhagalpur","Bhojpur","Buxar","Darbhanga","East Champaran","Gaya","Gopalganj","Jamui","Jehanabad","Kaimur","Katihar","Khagaria","Kishanganj","Lakhisarai","Madhepura","Madhubani","Munger","Muzaffarpur","Nalanda","Nawada","Patna","Purnia","Rohtas","Saharsa","Samastipur","Saran","Sheikhpura","Sheohar","Sitamarhi","Siwan","Supaul","Vaishali","West Champaran"],
    "Chhattisgarh" : ["Balod","Baloda Bazar","Balrampur","Bastar","Bemetara","Bijapur","Bilaspur","Dantewada","Dhamtari","Durg","Gariaband","Janjgir Champa","Jashpur","Kabirdham","Kanker","Kondagaon","Korba","Koriya","Mahasamund","Mungeli","Narayanpur","Raigarh","Raipur","Rajnandgaon","Sukma","Surajpur","Surguja"],
    "Goa" : ["North Goa","South Goa"],
    "Gujarat" : ["Ahmedabad","Amreli","Anand","Aravalli","Banaskantha","Bharuch","Bhavnagar","Botad","Chhota Udaipur","Dahod","Dang","Devbhoomi Dwarka","Gandhinagar","Gir Somnath","Jamnagar","Junagadh","Kheda","Kutch","Mahisagar","Mehsana","Morbi","Narmada","Navsari","Panchmahal","Patan","Porbandar","Rajkot","Sabarkantha","Surat","Surendranagar","Tapi","Vadodara","Valsad"],
    "Haryana" : ["Ambala","Bhiwani","Charkhi Dadri","Faridabad","Fatehabad","Gurugram","Hisar","Jhajjar","Jind","Kaithal","Karnal","Kurukshetra","Mahendragarh","Mewat","Palwal","Panchkula","Panipat","Rewari","Rohtak","Sirsa","Sonipat","Yamunanagar"],
    "HimachalPradesh" : ["Bilaspur","Chamba","Hamirpur","Kangra","Kinnaur","Kullu","Lahaul Spiti","Mandi","Shimla","Sirmaur","Solan","Una"],
    "JammuKashmir" : ["Anantnag","Bandipora","Baramulla","Budgam","Doda","Ganderbal","Jammu","Kargil","Kathua","Kishtwar","Kulgam","Kupwara","Leh","Poonch","Pulwama","Rajouri","Ramban","Reasi","Samba","Shopian","Srinagar","Udhampur"],
    "Jharkhand" : ["Bokaro","Chatra","Deoghar","Dhanbad","Dumka","East Singhbhum","Garhwa","Giridih","Godda","Gumla","Hazaribagh","Jamtara","Khunti","Koderma","Latehar","Lohardaga","Pakur","Palamu","Ramgarh","Ranchi","Sahebganj","Seraikela Kharsawan","Simdega","West Singhbhum"],
 "Karnataka" : ["Bagalkot","Bangalore Rural","Bangalore Urban","Belgaum","Bellary","Bidar","Vijayapura","Chamarajanagar","Chikkaballapur","Chikkamagaluru","Chitradurga","Dakshina Kannada","Davanagere","Dharwad","Gadag","Gulbarga","Hassan","Haveri","Kodagu","Kolar","Koppal","Mandya","Mysore","Raichur","Ramanagara","Shimoga","Tumkur","Udupi","Uttara Kannada","Yadgir"],
 "Kerala" : ["Alappuzha","Ernakulam","Idukki","Kannur","Kasaragod","Kollam","Kottayam","Kozhikode","Malappuram","Palakkad","Pathanamthitta","Thiruvananthapuram","Thrissur","Wayanad"],
 "MadhyaPradesh" : ["Agar Malwa","Alirajpur","Anuppur","Ashoknagar","Balaghat","Barwani","Betul","Bhind","Bhopal","Burhanpur","Chhatarpur","Chhindwara","Damoh","Datia","Dewas","Dhar","Dindori","Guna","Gwalior","Harda","Hoshangabad","Indore","Jabalpur","Jhabua","Katni","Khandwa","Khargone","Mandla","Mandsaur","Morena","Narsinghpur","Neemuch","Panna","Raisen","Rajgarh","Ratlam","Rewa","Sagar","Satna",
                   "Sehore","Seoni","Shahdol","Shajapur","Sheopur","Shivpuri","Sidhi","Singrauli","Tikamgarh","Ujjain","Umaria","Vidisha"],
 "Maharashtra" : ["Ahmednagar","Akola","Amravati","Aurangabad","Beed","Bhandara","Buldhana","Chandrapur","Dhule","Gadchiroli","Gondia","Hingoli","Jalgaon","Jalna","Kolhapur","Latur","Mumbai City","Mumbai Suburban","Nagpur","Nanded","Nandurbar","Nashik","Osmanabad","Palghar","Parbhani","Pune","Raigad","Ratnagiri","Sangli","Satara","Sindhudurg","Solapur","Thane","Wardha","Washim","Yavatmal"],
 "Manipur" : ["Bishnupur","Chandel","Churachandpur","Imphal East","Imphal West","Jiribam","Kakching","Kamjong","Kangpokpi","Noney","Pherzawl","Senapati","Tamenglong","Tengnoupal","Thoubal","Ukhrul"],
 "Meghalaya" : ["East Garo Hills","East Jaintia Hills","East Khasi Hills","North Garo Hills","Ri Bhoi","South Garo Hills","South West Garo Hills","South West Khasi Hills","West Garo Hills","West Jaintia Hills","West Khasi Hills"],
 "Mizoram" : ["Aizawl","Champhai","Kolasib","Lawngtlai","Lunglei","Mamit","Saiha","Serchhip","Aizawl","Champhai","Kolasib","Lawngtlai","Lunglei","Mamit","Saiha","Serchhip"],
 "Nagaland" : ["Dimapur","Kiphire","Kohima","Longleng","Mokokchung","Mon","Peren","Phek","Tuensang","Wokha","Zunheboto"],
 "Odisha" : ["Angul","Balangir","Balasore","Bargarh","Bhadrak","Boudh","Cuttack","Debagarh","Dhenkanal","Gajapati","Ganjam","Jagatsinghpur","Jajpur","Jharsuguda","Kalahandi","Kandhamal","Kendrapara","Kendujhar","Khordha","Koraput","Malkangiri","Mayurbhanj","Nabarangpur","Nayagarh","Nuapada","Puri","Rayagada","Sambalpur","Subarnapur","Sundergarh"],
 "Punjab" : ["Amritsar","Barnala","Bathinda","Faridkot","Fatehgarh Sahib","Fazilka","Firozpur","Gurdaspur","Hoshiarpur","Jalandhar","Kapurthala","Ludhiana","Mansa","Moga","Mohali","Muktsar","Pathankot","Patiala","Rupnagar","Sangrur","Shaheed Bhagat Singh Nagar","Tarn Taran"],
 "Rajasthan" : ["Ajmer","Alwar","Banswara","Baran","Barmer","Bharatpur","Bhilwara","Bikaner","Bundi","Chittorgarh","Churu","Dausa","Dholpur","Dungarpur","Ganganagar","Hanumangarh","Jaipur","Jaisalmer","Jalore","Jhalawar","Jhunjhunu","Jodhpur","Karauli","Kota","Nagaur","Pali","Pratapgarh","Rajsamand","Sawai Madhopur","Sikar","Sirohi","Tonk","Udaipur"],
 "Sikkim" : ["East Sikkim","North Sikkim","South Sikkim","West Sikkim"],
 "TamilNadu" : ["Ariyalur","Chennai","Coimbatore","Cuddalore","Dharmapuri","Dindigul","Erode","Kanchipuram","Kanyakumari","Karur","Krishnagiri","Madurai","Nagapattinam","Namakkal","Nilgiris","Perambalur","Pudukkottai","Ramanathapuram","Salem","Sivaganga","Thanjavur","Theni","Thoothukudi","Tiruchirappalli","Tirunelveli","Tiruppur","Tiruvallur","Tiruvannamalai","Tiruur","Vellore","Viluppuram","Virudhunagar"],
 "Telangana" : ["Adilabad","Bhadradri Kothagudem","Hyderabad","Jagtial","Jangaon","Jayashankar","Jogulamba","Kamareddy","Karimnagar","Khammam","Komaram Bheem","Mahabubabad","Mahbubnagar","Mancherial","Medak","Medchal","Nagarkurnool","Nalgonda","Nirmal","Nizamabad","Peddapalli","Rajanna Sircilla","Ranga Reddy","Sangareddy","Siddipet","Suryapet","Vikarabad","Wanaparthy","Warangal Rural","Warangal Urban","Yadadri Bhuvanagiri"],
 "Tripura" : ["Dhalai","Gomati","Khowai","North Tripura","Sepahijala","South Tripura","Unakoti","West Tripura"],
 "UttarPradesh" : ["Agra","Aligarh","Allahabad","Ambedkar Nagar","Amethi","Amroha","Auraiya","Azamgarh","Baghpat","Bahraich","Ballia","Balrampur","Banda","Barabanki","Bareilly","Basti","Bhadohi","Bijnor","Budaun","Bulandshahr","Chandauli","Chitrakoot","Deoria","Etah","Etawah","Faizabad","Farrukhabad","Fatehpur","Firozabad","Gautam Buddha Nagar","Ghaziabad","Ghazipur","Gonda","Gorakhpur","Hamirpur","Hapur","Hardoi","Hathras","Jalaun","Jaunpur","Jhansi","Kannauj","Kanpur Dehat","Kanpur Nagar","Kasganj","Kaushambi","Kheri","Kushinagar","Lalitpur","Lucknow","Maharajganj","Mahoba","Mainpuri","Mathura","Mau","Meerut","Mirzapur","Moradabad","Muzaffarnagar","Pilibhit","Pratapgarh","Raebareli","Rampur","Saharanpur","Sambhal","Sant Kabir Nagar","Shahjahanpur","Shamli","Shravasti","Siddharthnagar","Sitapur","Sonbhadra","Sultanpur","Unnao","anasi"],
 "Uttarakhand"  : ["Almora","Bageshwar","Chamoli","Champawat","Dehradun","Haridwar","Nainital","Pauri","Pithoragarh","Rudraprayag","Tehri","Udham Singh Nagar","Uttarkashi"],
 "WestBengal" : ["Alipurduar","Bankura","Birbhum","Cooch Behar","Dakshin Dinajpur","Darjeeling","Hooghly","Howrah","Jalpaiguri","Jhargram","Kalimpong","Kolkata","Malda","Murshidabad","Nadia","North 24 Parganas","Paschim Bardhaman","Paschim Medinipur","Purba Bardhaman","Purba Medinipur","Purulia","South 24 Parganas","Uttar Dinajpur"],
 "AndamanNicobar" : ["Nicobar","North Middle Andaman","South Andaman"],
 "Chandigarh" : ["Chandigarh"],
 "DadraHaveli" : ["Dadra Nagar Haveli"],
 "DamanDiu" : ["Daman","Diu"],
 "Delhi" : ["Central Delhi","East Delhi","New Delhi","North Delhi","North East Delhi","North West Delhi","Shahdara","South Delhi","South East Delhi","South West Delhi","West Delhi"],
 "Lakshadweep" : ["Lakshadweep"],
 "Puducherry" : ["Karaikal","Mahe","Puducherry","Yanam"],




  };

  const handleStateChange = (event) => {
    const stateValue = event.target.value;
    setSelectedState(stateValue);
    setSelectedcity('');
  };

  const handlecityChange = (event) => {
    const cityValue = event.target.value;
    setSelectedcity(cityValue);
  };

  const cityOptions = selectedState ? statesData[selectedState].map((city) => (
    <MenuItem key={city} value={city}>
      {city}
    </MenuItem>
  )) : null;

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };


  const { onFormSubmit } = useAPI();
  const onFormSubmit1 = () => {
    onFormSubmit(newEmployee);
  };



  return (
    <Modal
      open={open}
      onClose={onClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
   
    >
      <Fade in={open}>
        <div className="modal-container">
          <h2>Add New Employee</h2>
          <div className="grid-container">
            <div className="grid-row">
              <div className="grid-item">
                <TextField
                  name="name"
                  label="Employee Name"
                  value={newEmployee.name}
                  onChange={handleInputChange}
                  fullWidth
                  margin="normal"
                />
              </div>
            </div>
            <div className="grid-row">
              <div className="grid-item">
                <TextField
                  name="id"
                  label="Employee ID"
                  value={newEmployee.id}
                  onChange={handleInputChange}
                  fullWidth
                  margin="normal"
                />
              </div>
              <div className="grid-item">
                <TextField
                  name="email"
                  label="Employee E-mail"
                  value={newEmployee.email}
                  onChange={handleInputChange}
                  fullWidth
                  margin="normal"
                />
              </div>
            </div>
            <div className="grid-row">
              <div className="grid-item">
                <TextField
                  name="contact_no"
                  label="Contact Number"
                  value={newEmployee.contact_no}
                  onChange={handleInputChange}
                  fullWidth
                  margin="normal"
                />
              </div>
              <div className="grid-item">
                <TextField
                  name="department"
                  label="Department"
                  value={newEmployee.department}
                  onChange={handleInputChange}
                  fullWidth
                  margin="normal"
                />
              </div>
            </div>
            <div className="grid-row">
             
              <div className="grid-item">
                <Select 
                  name="state"
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  // value={newEmployee.state}
                  label="State"
                  style={{ color: "black" }}
                  fullWidth
                  value={selectedState} 
                  onChange={handleStateChange}
                  // onChange={handleInputChange}
                >
                  <MenuItem >Select State</MenuItem>
                    {Object.keys(statesData).map((state)=>(
                      <MenuItem value={state} key={state}>{state}</MenuItem>
                     ))}
                </Select>
              </div>
              <div className="grid-item">
                <Select                     // facing problem in city select
                  name="city"
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  // value={newEmployee.city}
                  label="City"
                  style={{ color: "black" }}
                  fullWidth
                  // onChange={handleInputChange}
                  value={selectedcity} 
                  onChange={handlecityChange}
                >
                  <MenuItem value="">Select</MenuItem>
                  {cityOptions}
                </Select>
              </div>

            </div>
            <div className="grid-row">
              <div className="grid-item">
                <TextField
                  name="DOB"
                  label="date Of Birth"
                  value={newEmployee.DOB}
                  onChange={handleInputChange}
                  fullWidth
                  margin="normal"
                />
                {/* <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DatePicker
                    label="Select Date"
                    value={selectedDate}
                    onChange={handleDateChange}
                    renderInput={(params) => <TextField {...params} />}
                  />
                </LocalizationProvider> */}
        
              </div>
              <div className="grid-item">
                <TextField
                  name="joining_date"
                  label="Joining Date"
                  value={newEmployee.joining_date}
                  onChange={handleInputChange}
                  fullWidth
                  margin="normal"
                />
              </div>
            </div>

            <Button
              variant="contained"
              color="primary"
              onClick={onFormSubmit1}
            >
              Add Employee
            </Button>
          </div>
        </div>
      </Fade>
    </Modal>
  );
};

export default AddEmployeeModal;