import Header from './components/Header.jsx'
import MyCard from './components/MyCard.jsx'
import Footer from './components/Footer.jsx'

const dogs = [
  {
    name: 'Bartolo',
    description:
      'Lleno de energía y listo para jugar. ¡Dale a Bartolo el hogar amoroso que se merece!',
    image:
      'https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&w=1000&q=80',
    tagText: 'Husky',
    tagColor: 'success',
  },
  {
    name: 'Messi',
    description:
      'Es juguetón, amigable y se lleva bien con niños y otros animales. ¡Haz de Messi parte de tu familia hoy mismo!',
    image:
      'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=1000&q=80',
    tagText: 'Bobtail',
    tagColor: 'primary',
  },
  {
    name: 'Gohan',
    description:
      'Un perro de tamaño mediano con un corazón gigante. Hazte amigo de Gohan y experimenta un amor incondicional!',
    image:
      'https://images.unsplash.com/photo-1525253086316-d0c936c814f8?auto=format&fit=crop&w=1000&q=80',
    tagText: 'Shar Pei',
    tagColor: 'danger',
  },
  {
    name: 'Princesa',
    description:
      'Es una compañera leal y cariñosa que adora los mimos y los abrazos. ¡Ayuda a Princesa a encontrar su final feliz!',
    image:
      'https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&w=1000&q=80',
    tagText: 'Beagle',
    tagColor: 'warning',
  },
]

export default function App() {
  return (
    <div className="page">
      <Header title="Adopta un perrito" />

      <main className="container-main">
        <section className="cards-grid" aria-label="Galería de perritos">
          {dogs.map((dog, idx) => (
            <MyCard
              key={dog.name}
              image={dog.image}
              name={dog.name}
              description={dog.description}
              tagText={dog.tagText}
              tagColor={dog.tagColor}
              centered={idx === 3}
            />
          ))}
        </section>
      </main>

      <Footer
        text={
          'Explora nuestra galería de adopción de perros para encontrar a tu compañero perfecto. Tenemos una variedad de perros con diferentes personalidades y tamaños, todos en busca de un hogar amoroso. Cada imagen captura su esencia única. Adopta un perro y bríndale una segunda oportunidad. Encuentra a tu compañero peludo para siempre.'
        }
      />
    </div>
  )
}
