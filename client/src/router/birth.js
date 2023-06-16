import React from "react";
import { Button } from "react-bootstrap";

const BirthCertificate = ()=>{
    return (
        <div className="auth">
        <h1 class="heading-birth">Birth <span class="certificate">Certificate</span></h1>
        <form >
            <div className="birth">
                <table>
                    <tr >
                        <td >Name</td>
                        <td><input type="text" name="studentname"  class="uname"/></td>
                    </tr>
                    <tr >
                        <td >Father's Name</td>
                        <td><input type="text" name="fathername" class="uname"/></td>
                    </tr>
                    <tr >
                        <td >Mother's Name</td>
                        <td><input type="text" name="mothername"  class="uname"/></td>
                    </tr>
                    <tr>
                        <td >Date of Birth</td>
                        <td><input type="date" name="dateofbirth" class="DOB"/></td>
                    </tr>
                    <tr >
                        <td >Gender</td>
                        <td>
                            <input type="radio" id="gender" name="gender" value="male" />Male
                            <input type="radio" id="gender" name="gender" value="female" />Female <br />
                        </td>
                    </tr>
                    <tr >
                        <td >Address</td>
                        <td><textarea class="address"></textarea></td>
                    </tr>
                    <tr>
                        <td>Aadhar number</td>
                        <td><input type="number" name="aadharnumber"  class="uname"/></td>
                    </tr>
                    <tr>
                        <td >
                        <Button   className="text-dark birthbtn" type="submit">
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


export default BirthCertificate;