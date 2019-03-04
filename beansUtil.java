public List<String> getBeanList(String beanName) {
	List<String> beanList = new ArrayList<>();
	BeanManager bm = CDI.current().getBeanManager();
	Iterator it = bm.getBeans(beanName).iterator();
	while(it.hasNext()) {
		 beanList.add(it.next().toString());
	}
	return beanList;
}
