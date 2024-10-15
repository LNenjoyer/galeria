import './App.css';
import './Obraz';
import Obraz from "./Obraz";
import obraz1 from './obraz1.png';
import obraz2 from './obraz2.png';
import obraz3 from './obraz3.png';
import obraz4 from './obraz4.png';
import obraz5 from './obraz5.png';
import obraz6 from './obraz6.png';
import obraz7 from './obraz7.png';
import obraz8 from './obraz8.png';


const obraz = [
    {nr:'1', photo:obraz1, name:'obraz1', desc:'opis obrazu numer 1', price:'1000'},
    {nr:'2', photo:obraz2, name:'obraz2', desc:'opis obrazu numer 2', price:'2000'},
    {nr:'3', photo:obraz3, name:'obraz3', desc:'opis obrazu numer 3', price:'3000'},
    {nr:'4', photo:obraz4, name:'obraz4', desc:'opis obrazu numer 4', price:'4000'},
    {nr:'5', photo:obraz5, name:'obraz5', desc:'opis obrazu numer 5', price:'5000'},
    {nr:'6', photo:obraz6, name:'obraz6', desc:'opis obrazu numer 6', price:'6000'},
    {nr:'7', photo:obraz7, name:'obraz7', desc:'opis obrazu numer 7', price:'7000'},
    {nr:'8', photo:obraz8, name:'obraz8', desc:'opis obrazu numer 8', price:'8000'},

]

const App = () => (
    <div className="App">
      <h1>Galeria obrazów</h1>
        <table>
            <tbody>
                <tr>
                    <td><Obraz nr={obraz[0].nr} photo={obraz[0].photo} name={obraz[0].name} desc={obraz[0].desc} price={obraz[0].price}/></td>
                    <td><Obraz nr={obraz[1].nr} photo={obraz[1].photo} name={obraz[1].name} desc={obraz[1].desc} price={obraz[1].price}/></td>
                    <td><Obraz nr={obraz[2].nr} photo={obraz[2].photo} name={obraz[2].name} desc={obraz[2].desc} price={obraz[2].price}/></td>
                    <td><Obraz nr={obraz[3].nr} photo={obraz[3].photo} name={obraz[3].name} desc={obraz[3].desc} price={obraz[3].price}/></td>
                </tr>
                <tr>
                    <td><Obraz nr={obraz[4].nr} photo={obraz[4].photo} name={obraz[4].name} desc={obraz[4].desc} price={obraz[4].price}/></td>
                    <td><Obraz nr={obraz[5].nr} photo={obraz[5].photo} name={obraz[5].name} desc={obraz[5].desc} price={obraz[5].price}/></td>
                    <td><Obraz nr={obraz[6].nr} photo={obraz[6].photo} name={obraz[6].name} desc={obraz[6].desc} price={obraz[6].price}/></td>
                    <td><Obraz nr={obraz[7].nr} photo={obraz[7].photo} name={obraz[7].name} desc={obraz[7].desc} price={obraz[7].price}/></td>
                </tr>
            </tbody>
        </table>










    </div>
);

export default App;
