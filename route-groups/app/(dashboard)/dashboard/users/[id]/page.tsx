const Page = async ({params} : {params : Promise<{id : string}>}) => {
    const {id} = await params;
    return(
        <div className={'text-blue-500'}>
            User {id} Details
        </div>
    )
}

export default Page;