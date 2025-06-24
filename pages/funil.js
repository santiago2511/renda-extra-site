export default function Funil() {
  return (
    <div className="min-h-screen bg-gray-100 p-6 flex flex-col items-center justify-center">
      <h1 className="text-xl font-bold mb-4">💡 Receba o Guia no Seu E-mail</h1>
      <form
        action="https://SEU_LINK_MAILERLITE"
        method="post"
        className="flex flex-col gap-3 w-full max-w-md bg-white p-6 rounded shadow"
      >
        <input
          type="email"
          name="email"
          placeholder="Digite seu melhor e-mail"
          className="border border-gray-300 p-2 rounded"
          required
        />
        <button
          type="submit"
          className="bg-purple-700 text-white py-2 rounded hover:bg-purple-800 transition"
        >
          Receber Guia Grátis
        </button>
      </form>
    </div>
  );
}
