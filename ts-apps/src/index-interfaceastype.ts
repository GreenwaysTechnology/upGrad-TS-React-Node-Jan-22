//Object types

//class as a type
interface Props {
    id: number;
    url: string;
    className?: string;
    target?: string;
    varient?: "dark" | "light" 
}

let newProps: Props = {
    id: 1,
    url: 'http://wwww.example.com',
    varient: "light"
}