


export default function ListGroup() {  

    const items = ['Jerry', 'Mary', 'Larry', 'Jeffrey'];

    return (
        <>
            <ul className="text-lg text-red-500">
                {items.map((FamilyName,index) => (
                    <li key={index}>{FamilyName}</li>
                ))}
            </ul>
        </>
    );

}