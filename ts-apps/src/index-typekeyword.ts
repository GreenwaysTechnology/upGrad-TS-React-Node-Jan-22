//Object types

type Image = "src" | "url";

//type as a type
type Props = {
    id: number;
    url: string;
    className?: string;
    target?: string;
    varient?: "dark" | "light"
    img?: Image
}

let newProps: Props = {
    id: 1,
    url: 'http://wwww.example.com',
    varient: "light",
    img : "url",
    
}