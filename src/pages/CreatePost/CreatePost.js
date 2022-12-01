import styles from "./CreatePost.module.css";

import { useState } from "react";
import { useInsertDocument } from "../../hooks/useInsertDocument";
import { useNavigate } from "react-router-dom";
import { useAuthValue } from "../../contexts/AuthContext";
import { storage } from "../../firebase/config";

import 'firebase/compat/auth';


import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage'


const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [body, setBody] = useState("");
  const [tags, setTags] = useState([]);
  const [role, setRole] = useState("");
  const [curr , setCurr] = useState("");
  const [formError, setFormError] = useState("");
  const [progress, setProgress] = useState("");

  const { user } = useAuthValue();

  const navigate = useNavigate();

  const { insertDocument, response } = useInsertDocument("posts");



  const handleSubmit = (e) => {
    e.preventDefault();
    setFormError("");
    

    // validate image
    try {
      new URL(image);
    } catch (error) {
      setFormError("Imagem não é URL");
    }
  


    // create tags array
    const tagsArray = tags.split(",").map((tag) => tag.trim().toLowerCase());

    // check values
    if (!title || !image || !tags || !body) {
      setFormError("Por favor, preencha todos os campos!");
    }
    
    console.log(tagsArray);

    console.log({
      title,
      image,
      body,
      tags: tagsArray,
      role,
      uid: user.uid,
      createdBy: user.displayName,
    });

    if(formError) return

    insertDocument({
      title,
      image,
      body,
      tags: tagsArray,
      role,
      uid: user.uid,
      createdBy: user.displayName,
    });

    // redirect to home page
    navigate("/");
  };

  return (
  <div className="background_post">
    <div className={styles.create_post}>
      <h2>Reportar defeito</h2>
      <p></p>
      <form onSubmit={handleSubmit}>
        <label>
          <input
            type="text"
            name="text"
            required
            placeholder="Pense num bom título..."
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
        </label>
        <label>
          <input
            type="text"
            name="image"
            required
            placeholder="Insira uma imagem do defeito"
            onChange={(e) => setImage(e.target.value)}
            value={image}
          />
        </label>
        <label>
          <textarea
            name="body"
            required
            placeholder="Insira o conteúdo do defeito"
            onChange={(e) => setBody(e.target.value)}
            value={body}
          ></textarea>
        </label>
        <label>
          <span></span>
          <input
            type="text"
            name="tags"
            required
            placeholder="Insira as tags de busca"
            onChange={(e) => setTags(e.target.value)}
            value={tags}
          />
        </label>
        <label>
           <select 
              name="role"  
              onChange={(e) => setRole(e.target.value)} 
              value={role}>
                <option>Selecione uma opção</option>
                <option value="NÍVEL: B (baixa) 😅">NÍVEL: B (baixa) 😅</option>    
                <option value="NÍVEL: M (média) 😨">NÍVEL: M (média) 😨</option>
                <option value="NÍVEL: A (alta) 💀">NÍVEL: A (alta) 💀</option>          
           </select>
        </label>
        <label>
    
          </label>
        {!response.loading && <button type="submit" className="btn">Reportar defeito!</button>}
        {response.loading && (
          <button className="btn" disabled>
            Carregando...
          </button>
        )}
        {(response.error || formError) && (
          <p className="error">{response.error || formError}</p>
        )}
      </form>
    </div>

  </div>
 
  );
};

export default CreatePost;