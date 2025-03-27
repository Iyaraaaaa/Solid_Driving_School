import React from 'react'
import {Dialog} from "@mui/material";

const CustomDialog = ({open, onClose, title, onConfirm}) => {
    return (
        <Dialog open={open} onClose={onClose}>
            <div className="w-96 h-64 bg-white rounded-2xl flex flex-col justify-center items-center">
                <div className="flex flex-col justify-center items-center">
                    <span className="text-2xl font-bold mt-2">{title}</span>
                    <div className="mt-3">
                        <p className="font-bold">Are You Sure You want to Do this Operation?</p>
                    </div>


                    <div className="flex gap-4 mt-7">
                        <button className="btn bg-blue-200 hover:bg-blue-300" onClick={() => onConfirm(true)}>Confirm</button>
                        <button className="btn" onClick={onClose}>Cancel</button>
                    </div>
                </div>
            </div>
        </Dialog>
    )
}
export default CustomDialog
