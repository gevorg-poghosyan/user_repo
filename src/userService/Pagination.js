export const Pagination =(pageSize, total_count) =>{
	let data = [];
	let pageCount = Math.ceil(total_count/pageSize);
    for(let i = 0; i < total_count; i++){
        data.push(i+1);
    }

    for(let j = 0; j < Math.ceil(total_count/10); j++){
    	data.unshift(data.splice(j,10))
    }
    return data.reverse()
}


