import react from 'react';

export default function NavbarItem({ label }) {

    return (
        <div className=" text-white cursor-pointer hover:text-gray-300 transition">
           {label}
        </div>
    )
}