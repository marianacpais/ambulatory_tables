$(document).ready(function () {
    var table = $('#example').DataTable({
        order: [[1, 'asc']],
        orderFixed: [[6, 'asc']],
        rowGroup: {
            dataSrc: 6
        },
        columnDefs: [
            {
                target: 0,
                visible: false,
            },
            {
                target: 6,
                visible: false,
            },
            {
                target: 7,
                visible: false,
            }
        ],

    });
 
});

{/* 
1 - <th>Code</th>
2 - <th>Code system</th>
3 - <th>Code description</th>
4 - <th>original_description</th>
5 - <th>Article</th>
6 - <th>major_grouping_variable</th>
7 - <th>level1_code_description_consolidated</th> 
*/}