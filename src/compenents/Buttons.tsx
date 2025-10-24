import type { ButtonProps } from "../types/types"


const Buttons = ({page, limit, onUseSearchParams, totalPages}: ButtonProps) => {
  return (
    <>
      <section className="buttons">
      <button onClick={()=>onUseSearchParams({_page: String(Math.max(page - 1, 1)), _limit: String(limit)})} disabled={page === 1}>Prev</button>
       <p>Page: {page}  /  {totalPages}</p>
       <button onClick={()=> onUseSearchParams({_page: String(page + 1,), _limit: String(limit)})} disabled={page ===totalPages}>Next</button>
      </section>
    </>
  )
}

export default Buttons
