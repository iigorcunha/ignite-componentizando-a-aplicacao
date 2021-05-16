
interface ContentProps {
  children: React.ReactNode
  genreTitle: string;
}


export function Content({ children, genreTitle }: ContentProps) {
  return (
    <div className="container">
        <header>
          <span className="category">Categoria:<span> {genreTitle}</span></span>
        </header>

        <main>
          {children}
        </main>
      </div>
  )
}