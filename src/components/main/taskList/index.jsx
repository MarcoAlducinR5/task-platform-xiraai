function TaskList(props) {

    return (
        <>
            <section className='flex flex-wrap m-4'>
                <div className="w-0 md:w-1/4 "></div>
                <div className="w-full md:w-2/4">
                    <ul role="list" className="">
                        {props.children}
                    </ul>
                </div>
                <div className="w-0 md:w-1/4 "></div>
            </section>
        </>
    );
    
}

export {TaskList}