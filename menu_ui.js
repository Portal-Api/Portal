function menu_ui_block_view_system_menu_block_alter(array &$build, BlockPluginInterface $block) {
  // Add contextual links for system menu blocks.
  $menus = menu_list_system_menus();
  $menu_name = $block->getDerivativeId();
  if (isset($menus[$menu_name])) {
    $build['#contextual_links']['menu'] = [
      'route_parameters' => array('menu' => $menu_name),
    ];
  }
}
