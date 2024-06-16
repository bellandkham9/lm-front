// lib/fetchTranslation.ts
import $ from 'jquery';

export const fetchTranslation = async (sourceLang: string, targetLang: string, text: string): Promise<string> => {
  return new Promise((resolve, reject) => {
    console.log(sourceLang)
    console.log(targetLang)
    console.log(text)
    const url = `https://lm1-paxp.onrender.com/dictionnaire/translate/?source_lang=${sourceLang}&target_lang=${targetLang}&text=${text}`;

    $.ajax({
      url: url,
      method: 'GET',
      success: (data) => {
        resolve(data["translated_text"]);
        console.log("le text traduit: "+data["translated_text"])
      },
      error: (error) => {
        console.log(error);
      }
    });
  });
};
