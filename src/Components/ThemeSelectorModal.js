import React from 'react'

const ThemeSelectorModal = (props) => {
    const {onClose} = props;

    const handleThemeColorChange =(color)=>{

        var root = document.querySelector(':root');
        root.style.setProperty('--primaryColor', color);

        onClose();
    }
    return (
        <div className="modal" onClick={onClose}>
            <div className="colors">
                <div className="color red" onClick={()=>{handleThemeColorChange('red')}}>Red</div>
                <div className="color green" onClick={()=>{handleThemeColorChange('#26984d')}}>Green</div>
                <div className="color purple" onClick={()=>{handleThemeColorChange('#E44FE4')}}>Purple</div>
                <div className="color brown" onClick={()=>{handleThemeColorChange('#b32a00')}}>Brown</div>
                <div className="color orange" onClick={()=>{handleThemeColorChange('#ff7500')}}>Orange</div>
                <div className="color navy-blue" onClick={()=>{handleThemeColorChange('#4ca2c8')}}>Navy Blue</div>
                {/* <div className="color navy-blue" onClick={()=>{handleThemeColorChange('#00d1d1')}}>Navy Blue</div> */}
                <div className="color blue" onClick={()=>{handleThemeColorChange('#8000ff')}}>Blue</div>
                <div className="color dark" onClick={()=>{handleThemeColorChange('rgb(120,120,120)')}}>Dark</div>
            </div>
        </div>
    )
}

export default ThemeSelectorModal;