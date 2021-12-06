package main
import {
	"fmt"
	"os"
}

function main() {
	_,err : = os.open("userRoute.js")
	if err !=nil {
		fmt.Println(err)
	}
}