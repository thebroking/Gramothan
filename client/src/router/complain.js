import React from 'react';

const Complain =()=>{
    return(
        <div>
            <h1 class="heading-ration1">Complain Section</h1>
    <h3 class="heading-ration">Where to Complain?</h3>
    <p class="ration-desc">To file a complaint, you should contact the respective Administrative Complaints Officer
        (ACO) for the geographical area where the incident occurred. The table above provides a list of ACOs along with
        their contact information, including phone numbers and email addresses. You can contact them by phone or email
        to file a complaint related to any administrative issue in the respective region.</p>
    <table class="table table-hover table-gray">
        <thead>
            <tr>
                <th class="theader">Western Units</th>
                <th class="theader">Contact Number</th>
                <th class="theader">Email</th>
                <th class="theader">Eastern Units</th>
                <th class="theader">Contact Number</th>
                <th class="theader">Email</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td class="tableData">Agra</td>
                <td class="tableData">9454401988</td>
                <td class="tableData">aco-aga.ag@up.gov.in</td>
                <td class="tableData">Ayodhya</td>
                <td class="tableData">9454401900</td>
                <td class="tableData">aco-aya.ay@up.gov.in</td>
            </tr>
            <tr>
                <td class="tableData">Aligarh</td>
                <td class="tableData">9454402485</td>
                <td class="tableData">aco-aligarh.al@up.gov.in</td>
                <td class="tableData">Azamgarh</td>
                <td class="tableData">9454402493</td>
                <td class="tableData">aco-azamgarh.az@up.gov.in</td>
            </tr>
            <tr>
                <td class="tableData">Bareilly</td>
                <td class="tableData">9454401653</td>
                <td class="tableData">aco-bry.br@up.gov.in</td>
                <td class="tableData">Banda</td>
                <td class="tableData">9454402489</td>
                <td class="tableData">aco-banda.bn@up.gov.in</td>
            </tr>
            <tr>
                <td class="tableData">Jhansi</td>
                <td class="tableData">9454401650</td>
                <td class="tableData">aco-jsi.jh@up.gov.in</td>
                <td class="tableData">Basti</td>
                <td class="tableData">9454402491</td>
                <td class="tableData">aco-basti.bs@up.gov.in</td>
            </tr>
            <tr>
                <td class="tableData">Kanpur</td>
                <td class="tableData">9454401887</td>
                <td class="tableData">aco-knr.kn@up.gov.in</td>
                <td class="tableData">Gonda</td>
                <td class="tableData">9454402492</td>
                <td class="tableData">aco-gonda.gn@up.gov.in</td>
            </tr>
            <tr>
                <td class="tableData">Meerut</td>
                <td class="tableData">9454401899</td>
                <td class="tableData">aco-mrt.me@up.gov.in</td>
                <td class="tableData">Gorakhpur</td>
                <td class="tableData">9454401652</td>
                <td class="tableData">aco-gkr.gr@up.gov.in</td>
            </tr>
            <tr>
                <td class="tableData">Moradabad</td>
                <td class="tableData">9454401987</td>
                <td class="tableData">aco-mdd.mo@up.gov.in</td>
                <td class="tableData">Lucknow</td>
                <td class="tableData">9454402494</td>
                <td class="tableData">aco-lko.lu@up.gov.in</td>
            </tr>
            <tr>
                <td class="tableData">Saharanpur</td>
                <td class="tableData">9454402486</td>
                <td class="tableData">aco-saharanpur.sa@up.gov.in</td>
                <td class="tableData">Mirzapur</td>
                <td class="tableData">9454402487</td>
                <td class="tableData">aco-mirzapur.mi@up.gov.in</td>
            </tr>
            <tr>
                <td class="tableData">Task Force</td>
                <td class="tableData">9454401991</td>
                <td class="tableData">aco.lu@up.gov.in</td>
                <td class="tableData">Prayagraj</td>
                <td class="tableData">9454402490</td>
                <td class="tableData">aco.prayagraj@up.gov.in</td>

            </tr>
        </tbody>
    </table>

        </div>
    )
}

export default Complain;