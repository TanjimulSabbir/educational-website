import React from 'react';
import cap from '../../../Assets/Icon/mortarboard.png'
import internet from '../../../Assets/Icon/internet.png'
import online from '../../../Assets/Icon/online-learning.png'
import teacher from '../../../Assets/Images/teacher.png'
import book from '../../../Assets/Images/book.png'
import access from '../../../Assets/Images/fast-access.png'
import Card from './Card';
import { useLocation } from 'react-router-dom';

const Cards = () => {
    const CardInfo = [
        { _id: 1, title: "Get a certificate", description: "Sed a eros sodales diam sagittis faucibus. Cras id erat nisl. Lorem tempus rhoncus sit tortor.", icon: cap },
        { _id: 2, title: "All over the globe", description: "Donec urna massa, cursus venenatis ipsum et, tempus rhoncus tortor. Lorem ipsum dolor.", icon: internet },
        { _id: 3, title: "Live online lectures", description: "Sed a eros sodales diam sagittis faucibus. Cras id erat nisl. Lorem ipsum dolor sit lorem amet.", icon: online },
        { _id: 4, title: "Educational materials", description: "Sed a eros sodales diam sagittis faucibus. Cras id erat nisl. Lorem ipsum dolor sit lorem amet.", icon: book },
        { _id: 5, title: "Professional teachers", description: "Sed a eros sodales diam sagittis faucibus. Cras id erat nisl. Lorem ipsum dolor sit lorem amet.", icon: teacher },
        { _id: 6, title: "Accessibility programs", description: "Sed a eros sodales diam sagittis faucibus. Cras id erat nisl. Lorem ipsum dolor sit lorem amet.", icon: access },
    ];
    const location = useLocation();
    const path = location.pathname.split("/")[1];
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-14 px-20 lg:py-20 shadow-xl border'>
            {
                CardInfo.map(info => {
                    if (info._id < 4) {
                        return <Card key={info._id} info={info}></Card>
                    }
                    if (path === "about") {
                        return <Card key={info._id} info={info}></Card>
                    }

                })
            }
        </div>
    );
};

export default Cards;