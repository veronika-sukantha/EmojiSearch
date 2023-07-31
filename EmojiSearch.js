import React from 'react'
import { useState } from 'react';
import './EmojiSearch.css';

const emojiData=[
    {
    id:1,
    symbol:"🤩",
    name :'starry eyes'
    },
    {
        id:1,
        symbol:"😊",
        name:'smiling'
        },
        {
            id:1,
            symbol:"🤣",
            name:'rolling on the floor'
            },
            {
                id:1,
                symbol:"😂",
                name:'laughing'
                },
                {
                    id:1,
                    symbol:"😁",
                    name:'Grinning'
                    },
                    {
                        id:1,
                        symbol:"😎",
                        name:'cool'
                        },
                      {
                            id:1,
                            symbol:"❤️",
                            name:'love'
                            },
                            {
                                id:1,
                                symbol:"🥰",
                                name:'happy'
                                },
                                {
                                    id:1,
                                    symbol:"🎶",
                                    name:'music'
                                    },
                                    {
                                        id:1,
                                        symbol:"😴",
                                        name:'sleeping'
                                        }
   
]

function EmojiSearch() {
    const [searchEmoji,setSearchEmoji]=useState("");
    const handleChange=(e)=>{
        setSearchEmoji(e.target.value);
    }
    const showEmoji= emojiData.filter((emoji)=>{
        const emojiName=emoji.name.toLowerCase();
        return emojiName.includes(searchEmoji.toLowerCase());
    });
  return (
    <div className='Main'>
        <h1>React Emoji App</h1>
        <input type='text' placeholder='search for emoji' value={searchEmoji} onChange={handleChange}></input>
        <div className='Container'>
            {
                showEmoji.map((emoji) =>emoji.symbol)
            }
        </div>
    </div>
  )
}

export default EmojiSearch