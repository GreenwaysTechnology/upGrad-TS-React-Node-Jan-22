import ReactDOM from 'react-dom';
import React, { ReactNode } from 'react';

interface LinkType {
    class?: string;
    href: string;
    target?: string
    rel?: string
    children: ReactNode
}

const Link = (props: LinkType) => {
    // props.class?.includes("-")
    return <a
        className={props.class}
        href={props.href}
        target={props.target}
        rel={props.rel}
    >
        {props.children}
    </a>
}

const Button = props => <button>Home</button>

const Page = (props) => {

    return <div>
        {/**Home is element : component/element as prop */}
        <Link class="link" href="" target="" rel="">Home</Link>
        <Link href=""><button>click</button></Link>
        <Link href="">
            <Button />
        </Link>

    </div>
}

const App = () => {
    return <Page />
}
ReactDOM.render(<App />, document.getElementById('root'))