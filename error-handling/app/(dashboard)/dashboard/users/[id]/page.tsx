const Page = async ({params} : {params: Promise<{id : string}>}) => {
    const { id } = await params;

    return (
        <div className={'text-red-500'}>
            User {id} Detail
        </div>
    )
}

export default Page;