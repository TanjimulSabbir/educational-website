import React from 'react';
import icon1 from '../../Assets/Images/phone-black-32px.png'
import icon2 from '../../Assets/Images/gmail_32px.png'
import icon3 from '../../Assets/Images/place.jpg'


const ContactCards = () => {
    const info = [
        { _id: 1, place: "California,61 Wood Ave. Holly Springs, NC 27540", img: icon1 },
        { _id: 2, telephone: "+1-202-555-0150 +1-202-555-0151", img: icon2 },
        { _id: 3, email: "tanjimulislamsabbir@gmail.com", img: icon3 }
    ]
    return (
        <div className='md:flex md:space-x-4 space-y-6 md:space-y-0 py-10'>
            {
                info.map(item => {
                    const { place, telephone, email, img } = item;
                    return <div className="card w-96 bg-neutral text-neutral-content">
                        <div className="card-body items-center text-center">
                            <div className='rounded-full bg-red-400 p-5'><img className='w-10 text-red-400' src={img} alt="" /></div>
                            <div>
                                <p>{place}</p>
                                <p>{telephone}</p>
                                <p>{email}</p>
                            </div>
                        </div>
                    </div>
                })}
        </div>)
};

export default ContactCards;