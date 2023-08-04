import React, {useEffect, useState} from 'react'

type PropsType = {
    isOwner: boolean
    status: string
    updateStatus: (status: string) => void
}

const ProfileStatus: React.FC<PropsType> = ({status, updateStatus, isOwner}) => {

    let [editMode, setEditMode] = useState(false)
    let [localStatus, setLocalStatus] = useState(status)

    useEffect(() => {
        setLocalStatus(status)
    }, [status])

    const activeEditMode = () => {
        if (isOwner) {
            setEditMode(true)
        }
    }

    const deactiveEditMode = () => {
        setEditMode(false)
        updateStatus(localStatus)
    }

    const onStatusChange = (e: React.FormEvent<HTMLInputElement>) => {
        setLocalStatus(e.currentTarget.value)
    }

    return <div>{
        !editMode
            ? <span onDoubleClick={activeEditMode}>{status || 'User haven\'t set status yet'}</span>
            : <input name={'status'} autoFocus={true}
                     onBlur={deactiveEditMode} onChange={onStatusChange}
                     value={localStatus}
            />
    }
    </div>
}

export default ProfileStatus