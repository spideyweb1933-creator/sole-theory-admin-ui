<div className="flex items-center justify-between mb-4">
  <h1 className="text-2xl font-semibold">Products</h1>
  <div className="flex gap-2">
    <button ...>◀</button>
    <button ...>▶</button>
    <button ...>Add Product</button>
    <button ...>Delete</button>
    <button ...>Save</button>
  </div>
</div>
<div className="flex items-center justify-between mb-4">
  <a
    href="mailto:spideyweb1933@gmail.com"
    className="px-3 py-2 rounded-xl bg-neutral-800 hover:bg-neutral-700 transition"
    title="Email support"
  >
    Contact&nbsp;Us
  </a>

  <div className="flex gap-2">
    <button className="px-3 py-2 rounded-xl bg-neutral-800" onClick={() => go(-1)}>◀</button>
    <button className="px-3 py-2 rounded-xl bg-neutral-800" onClick={() => go(1)}>▶</button>
    <button className="px-3 py-2 rounded-xl bg-white text-black" onClick={onAdd}>Add Product</button>
    <button className="px-3 py-2 rounded-xl bg-red-500" onClick={onDelete}>Delete</button>
    <button className="px-3 py-2 rounded-xl bg-green-500" onClick={onSave}>Save</button>
  </div>
</div>
  <a
  href="https://wa.me/40721527147?text=Hi%20Ace%2C%20I%20need%20help%20with%20the%20admin."
  target="_blank" rel="noopener noreferrer"
  className="px-3 py-2 rounded-xl bg-green-600 hover:bg-green-500 transition"
>
  WhatsApp Help
</a>

