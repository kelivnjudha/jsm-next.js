const Page = async ({params} : {params: Promise<{id: string}>}) => {
    const { id } = await params;
    return(
        <div>
            User ID: {id} Details
        </div>
    )
}

export default Page;