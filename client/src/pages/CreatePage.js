import React, {useState, useEffect, useContext} from 'react'
import { useHttp } from '../hooks/http.hook'
import { AuthContext } from '../context/AuthContext'
import '../index.css'
import { useNavigate } from 'react-router-dom'

export const CreatePage = () => {
    const history = useNavigate()
    const auth = useContext(AuthContext)
    const [link, setLink] = useState('')
    const { request } = useHttp()
    useEffect(() => {
        window.M.updateTextFields()
    },[])
    const pressHandler = async event => {
        if (event.key === 'Enter') {
            try {
                const data = await request('/api/link/generate', 'POST', { from: link }, {
                    Authorization: `Bearer ${auth.token}`
                })
                history(`/detail/${data.link._id}`, {replace: true})
            } catch (e) {}
        } 
    }
    return (
        <div className='row'>
            <div className='col s8 offset-s2 creat-p'>
                <div className="input-field">
                    <input placeholder="Вставьте ссылку" id="link" type="text" value={link} onChange={e => setLink(e.target.value)} onKeyPress={pressHandler}/>
                    <label htmlFor="link">Введите ссылку</label> 
                </div>               
            </div>
        </div>
    )
}