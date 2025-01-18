<td className="action-icons">
  <button 
    type="button"
    onClick={() => handleEdit(password)}
    className="p-2 hover:bg-gray-100 dark:hover:bg-slate-700 rounded-full"
  >
    <EditIcon className="w-5 h-5 text-blue-500" />
    <span className="sr-only">Edit password</span>
  </button>
  <button 
    type="button"
    onClick={() => handleCopy(password)}
    className="p-2 hover:bg-gray-100 dark:hover:bg-slate-700 rounded-full"
  >
    <CopyIcon className="w-5 h-5 text-green-500" />
    <span className="sr-only">Copy password</span>
  </button>
  <button 
    type="button"
    onClick={() => handleDelete(password.id)}
    className="p-2 hover:bg-gray-100 dark:hover:bg-slate-700 rounded-full"
  >
    <DeleteIcon className="w-5 h-5 text-red-500" />
    <span className="sr-only">Delete password</span>
  </button>
</td> 