
function ProfilPic() {

  const imageUrl = "https://picsum.photos/150?random=1"
  const handleClick = (e) => e.target.style.display = "none";
    return (
      <>
        <img onClick={(e) => handleClick(e)} src={imageUrl} alt="" />
      </>
    )
  }
  
  export default ProfilPic