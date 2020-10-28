import React, { useState } from 'react';
import { Button } from 'react-bootstrap'
import XLSX from "xlsx";
import axios from "axios"

const FirstPage = () => {

    const [forms, setchangeforms] = useState([]);

    const handleExport = () => {
        axios.get('http://127.0.0.1/slimapp/public/index.php/api/coupon')
            .then(response => {
                /*接到request data後要做的事情*/
                response.data.forEach((element) => {
                    forms.push({
                        title: element.title,
                        title_2: element.title_2,
                        get_time: element.get_time,
                        use_time: element.use_time,
                        publish_count: element.publish_count,
                        get_count_0: element.get_count_0,
                        get_count_1: element.get_count_1,
                        use_count_0: element.use_count_0,
                        use_count_1: element.use_count_1,
                        use_percent: element.use_percent,
                        data_time: element.data_time,
                    });
                });
                setchangeforms(forms)
            })
            .then(() => {
                let sheetData1 = forms.map(item => ({
                    '標題': item.title,
                    '副標題	': item.title_2,
                    '領取時間': item.get_time,
                    '使用時間': item.use_time,
                    '發行數量': item.publish_count,
                    '已領取數量': item.get_count_0,
                    '已領取數量_2': item.get_count_1,
                    '已使用數量': item.use_count_0,
                    '已使用數量_2': item.use_count_1,
                    '使用百分率': item.use_percent,
                    '抓取資料時間': item.data_time,
                }));

                const sheet1 = XLSX.utils.json_to_sheet(sheetData1);
                const wb = XLSX.utils.book_new();
                XLSX.utils.book_append_sheet(wb, sheet1, 'coupon');
                XLSX.writeFile(wb, "sheet.xlsx");
            })

    }

    return (
        <div>
            <Button onClick={handleExport}>export excel</Button>
        </div>
    )
}


export default FirstPage;
