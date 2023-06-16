import React from "react";
import { Button } from "react-bootstrap";
const DeathCertificate = () =>{
    return (

        <div className="auth">
        <h1 class="heading-death">Death <span class="certificate">Certificate</span></h1>
        <form>
            <div className="birth">
                <table>
                    <tr >
                        <td >Name</td>
                        <td><input type="text" name="studentname" class="uname"/></td>
                    </tr>
        
                    <tr>
                        <td >Date of Death</td>
                        <td><input type="date" name="dateofdeath" class="DOB"/></td>
                    </tr>
                    <tr>
                        <td >Age</td>
                        <td><input type="number" name="age"  class="uname"/></td>
                    </tr>
                    <tr >
                        <td >Gender</td>
                        <td>
                            <input type="radio" id="gender" name="gender" value="male" />Male
                            <input type="radio" id="gender" name="gender" value="female" />Female <br />
                        </td>
                    </tr>
                    <tr>
                        <td >Address</td>
                        <td><textarea class="address"></textarea></td>
                    </tr>
                    <tr>
                        <td>Aadhar number</td>
                        <td><input type="number" name="aadharnumber"  class="uname"/></td>
                    </tr>
                    <tr>
                        <td>
                        <Button  className="text-dark marginl" type="submit">
                            Submit
                        </Button>
                        </td>
                    </tr>
                </table>
            </div>
        </form>
    </div>


    )
}


export default DeathCertificate;