const latinAmericaStats = [
    {
        "Country": "Argentina",
        "Gross national income per capita": "Upper-middle income",
        "Value of GNI per capita": "1",
        "Political initiatives": " ",
        "Value of joining a program": "0",
        "Foreign companies' presence": "Telefónica S.A.",
        "Huawei": "1",
        "Ericsson": "1",
        "Nokia": "1",
        "ZTE": "0"
    },
    {
        "Country": "Bolivia",
        "Gross national income per capita": "Lower-middle income",
        "Value of GNI per capita": "-1",
        "Political initiatives": " ",
        "Value of joining a program": "0",
        "Foreign companies' presence": "Millicom International Cellular",
        "Huawei": "1",
        "Ericsson": "1",
        "Nokia": "0",
        "ZTE": "0"
    },
    {
        "Country": "Brazil",
        "Gross national income per capita": "Upper-middle income",
        "Value of GNI per capita": "1",
        "Political initiatives": "Clean network",
        "Value of joining a program": "-1",
        "Foreign companies' presence": "Telefónica S.A., Gruppo TIM ",
        "Huawei": "1",
        "Ericsson": "3",
        "Nokia": "1",
        "ZTE": "0"
    },
    {
        "Country": "Venezuela",
        "Gross national income per capita": "Lower-middle income",
        "Value of GNI per capita": "-1",
        "Political initiatives": "Digital Silk road",
        "Value of joining a program": "1",
        "Foreign companies' presence": " ",
        "Huawei": "1",
        "Ericsson": "0",
        "Nokia": "0",
        "ZTE": "0"
    },
    {
        "Country": "Guatemala",
        "Gross national income per capita": "Upper-middle income",
        "Value of GNI per capita": "1",
        "Political initiatives": " ",
        "Value of joining a program": "0",
        "Foreign companies' presence": "Millicom International Cellular",
        "Huawei": "1",
        "Ericsson": "0",
        "Nokia": "0",
        "ZTE": "0"
    },
    {
        "Country": "Honduras",
        "Gross national income per capita": "Lower-middle income",
        "Value of GNI per capita": "-1",
        "Political initiatives": " ",
        "Value of joining a program": "0",
        "Foreign companies' presence": "Millicom International Cellular",
        "Huawei": "0",
        "Ericsson": "1",
        "Nokia": "0",
        "ZTE": "0"
    },
    {
        "Country": "Colombia",
        "Gross national income per capita": "Upper-middle income",
        "Value of GNI per capita": "1",
        "Political initiatives": " ",
        "Value of joining a program": "0",
        "Foreign companies' presence": "Telefónica, S.A., Millicom International Cellular",
        "Huawei": "1",
        "Ericsson": "1",
        "Nokia": "2",
        "ZTE": "1"
    },
    {
        "Country": "Costa Rica",
        "Gross national income per capita": "Upper-middle income",
        "Value of GNI per capita": "1",
        "Political initiatives": " ",
        "Value of joining a program": "0",
        "Foreign companies' presence": " ",
        "Huawei": "1",
        "Ericsson": "0",
        "Nokia": "1",
        "ZTE": "0"
    },
    {
        "Country": "Mexico",
        "Gross national income per capita": "Upper-middle income",
        "Value of GNI per capita": "1",
        "Political initiatives": " ",
        "Value of joining a program": "0",
        "Foreign companies' presence": " ",
        "Huawei": "1",
        "Ericsson": "0",
        "Nokia": "1",
        "ZTE": "0"
    },
    {
        "Country": "Paraguay ",
        "Gross national income per capita": "Upper-middle income",
        "Value of GNI per capita": "1",
        "Political initiatives": " ",
        "Value of joining a program": "0",
        "Foreign companies' presence": "Millicom International Cellular",
        "Huawei": "0",
        "Ericsson": "1",
        "Nokia": "0",
        "ZTE": "0"
    },
    {
        "Country": "Peru",
        "Gross national income per capita": "Upper-middle income",
        "Value of GNI per capita": "1",
        "Political initiatives": "Digital Silk road",
        "Value of joining a program": "1",
        "Foreign companies' presence": " ",
        "Huawei": "1",
        "Ericsson": "0",
        "Nokia": "0",
        "ZTE": "0"
    },
    {
        "Country": "El Salvador",
        "Gross national income per capita": "Lower-middle income",
        "Value of GNI per capita": "-1",
        "Political initiatives": " ",
        "Value of joining a program": "0",
        "Foreign companies' presence": "Millicom International Cellular",
        "Huawei": "0",
        "Ericsson": "1",
        "Nokia": "0",
        "ZTE": "0"
    },
    {
        "Country": "Trinidad and Tobago",
        "Gross national income per capita": "High income",
        "Value of GNI per capita": "2",
        "Political initiatives": " ",
        "Value of joining a program": "0",
        "Foreign companies' presence": " ",
        "Huawei": "1",
        "Ericsson": "0",
        "Nokia": "0",
        "ZTE": "0"
    },
    {
        "Country": "Uruguay",
        "Gross national income per capita": "High income",
        "Value of GNI per capita": "2",
        "Political initiatives": " ",
        "Value of joining a program": "0",
        "Foreign companies' presence": " ",
        "Huawei": "0",
        "Ericsson": "0",
        "Nokia": "2",
        "ZTE": "0"
    },
    {
        "Country": "Chile",
        "Gross national income per capita": "High income",
        "Value of GNI per capita": "2",
        "Political initiatives": " ",
        "Value of joining a program": "0",
        "Foreign companies' presence": "Telefónica, S.A. ",
        "Huawei": "0",
        "Ericsson": "1",
        "Nokia": "2",
        "ZTE": "0"
    },
    {
        "Country": "Ecuador",
        "Gross national income per capita": "Upper-middle income",
        "Value of GNI per capita": "1",
        "Political initiatives": "Both",
        "Value of joining a program": "-1",
        "Foreign companies' presence": " ",
        "Huawei": "1",
        "Ericsson": "0",
        "Nokia": "1",
        "ZTE": "0"
    }
];

for(let i = 0; i < latinAmericaStats.length; i++){
    $("#table-info").append(`
        <tr class="bottom-table__row">
            <td class="bottom-table__column"><p>${latinAmericaStats[i].Country}</p></td>
            <td class="bottom-table__column"><p>${latinAmericaStats[i]["Gross national income per capita"]}</p></td>
            <td class="bottom-table__column"><p>${latinAmericaStats[i]["Value of GNI per capita"]}</p></td>
            <td class="bottom-table__column"><p>${latinAmericaStats[i]["Political initiatives"]}</p></td>
            <td class="bottom-table__column"><p>${latinAmericaStats[i]["Value of joining a program"]}</p></td>
            <td class="bottom-table__column"><p>${latinAmericaStats[i]["Foreign companies' presence"]}</p></td>
            <td class="bottom-table__column"><p>${latinAmericaStats[i].Huawei}</p></td>
            <td class="bottom-table__column"><p>${latinAmericaStats[i].Ericsson}</p></td>
            <td class="bottom-table__column"><p>${latinAmericaStats[i].Nokia}</p></td>
            <td class="bottom-table__column"><p>${latinAmericaStats[i].ZTE}</p></td>
        </tr>
    `);
}