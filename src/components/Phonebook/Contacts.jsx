export const Contacts = ({name, tel}) => {
    return ( 
        <div>
            <li>
                <p>{name}: {tel}</p>
            </li>
        </div>
    );
}