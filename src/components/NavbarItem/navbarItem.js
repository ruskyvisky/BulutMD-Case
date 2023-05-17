import react from 'react';

export default function NavbarItem({ label , onClick }) {

    return (
        <div className=" text-white cursor-pointer hover:text-gray-300 transition" onClick={onClick}>
           {label}
        </div>
    )
}